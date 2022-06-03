import React, { useEffect, useState } from 'react';
import { Popover, Button, Flex } from '@cogoport/front/components';
import { Container, PopoverContainer, PopoverCard, NavigationContainer, NavigationText, NoData, ValueText, CollectionValueButton, RemoveCollection } from './styles';
import API from '../../../../utils/api';
import { useRequest } from '../../../../hooks';
import {SingleArrowIcon} from '../../../../assets/icons/index';
import {Dropdown} from '../../../../assets/icons/index';
import {DoubleArrowIcon} from '../../../../assets/icons/index';
import {CloseIcon} from '../../../../assets/icons/index';
import Loading from '../../../../loading/popover-loading';

const CollectionPopover = ({ previousValue = null, placeholder = 'Choose collection', onChange = () => {} }) => {
	const [value, setValue] = useState(previousValue);
	const [showPopover, setShowPopover] = useState(false);
	const [collectionId, setCollectionId] = useState(null);
	const [navigationData, setNavigationData] = useState([
		{
			id          : null,
			name        : 'Collection',
			description : null,
			status      : null,
		},
	]);
	const { apiMethod, apiName, apiScope } = API.LIST_ANALYTICS_COLLECTIONS;
	const listCollectionAPI = useRequest(apiMethod, false, apiScope)(apiName);

	const loading = listCollectionAPI?.loading;
	const data = listCollectionAPI?.data?.list || [];

	const getCollectionList = (id = null) => {
		let filters = {};
		if (id) filters = { parent_collection_id: id };
		else filters = { top_level_collection_required: true };
		listCollectionAPI.trigger({ params: { filters } });
	};

	useEffect(() => {
		if (showPopover) getCollectionList(collectionId);
	}, [collectionId]);

	useEffect(() => {
		if (!showPopover) handleNavigationClick({ id: null });
	}, [showPopover]);

	const handleArrowClick = (e, item) => {
		e.stopPropagation();
		setCollectionId(item?.id);
		const collectionList = navigationData.concat(item) || [];
		setNavigationData(collectionList);
	};

	const handleOnClickCard = (e, item) => {
		setValue(item?.name);
		onChange(item?.id, item);
		setShowPopover(false);
	};

	const togglePopover = () => {
		setShowPopover((previousState) => {
			if (!previousState) getCollectionList();

			return !previousState;
		});
	};

	const handleNavigationClick = (item) => {
		const collectionList = navigationData;
		const index = collectionList.findIndex((a) => a.id === item?.id);
		collectionList.length = index + 1;
		setNavigationData(collectionList);
		setCollectionId(item?.id);
	};

	const handleRemoveCollection = (e) => {
		e.stopPropagation();
		onChange('', null);
		setValue(null);
	};

	const content = () => {
		const popoverBody = () => {
			if (loading) return <Loading title={navigationData?.[navigationData?.length - 1]?.name} />;
			if (!loading && data?.length === 0) return <NoData>No more collections</NoData>;
			return (
				data.map((collection) => (
					<PopoverCard onClick={(e) => handleOnClickCard(e, collection)}>
						{collection?.name}
						{/* <Button className="card-button" ghost onClick={(e) => handleArrowClick(e, collection)}> */}
						<SingleArrowIcon 
						onClick={(e) => handleArrowClick(e, collection)}
						/>
						{/* </Button> */}
					</PopoverCard>
				)));
		};
		return (
			<PopoverContainer>
				<NavigationContainer>
					{
						navigationData.map((navigation, index) => (
							<Flex>
								{index !== 0 && <DoubleArrowIcon style={{ margin: '3px 3px 0' }} />}
								<NavigationText
									isLast={navigationData?.[navigationData?.length - 1]?.id === navigation?.id}
									onClick={() => handleNavigationClick(navigation)}
								>
									{navigation?.name}
								</NavigationText>
							</Flex>
						))
					}
					<Button ghost className="close-button" onClick={() => setShowPopover(false)}><CloseIcon /></Button>
				</NavigationContainer>
				{popoverBody()}
			</PopoverContainer>
		);
	};
	return (
		<Container>
			<Popover
				visible={showPopover}
				interactive
				theme="light-border"
				animation="perspective"
				content={content()}
				onOuterClick={() => setShowPopover(false)}
			>
				<Button isSelected={showPopover} className="popover-button" ghost size="sm" onClick={() => togglePopover()}>
					<Flex direction="row" justifyContent="space-between" alignItems="center">
						<ValueText isPlaceHolder={!value && placeholder}>
							{value ? (
								<CollectionValueButton>
									{value}
									<RemoveCollection>
										<CloseIcon onClick={(e) => handleRemoveCollection(e)} style={{ fontSize: '14px' }} />
									</RemoveCollection>
								</CollectionValueButton>
							) : placeholder}
						</ValueText>
						<Dropdown />
					</Flex>
				</Button>
			</Popover>
		</Container>
	);
};
export default CollectionPopover;
