import React, { useState } from 'react';
import { Checkbox, Flex, Text, Tag, Button, Modal } from '@cogoport/front/components';
import { Container, TagDiv } from './styles';
import WidgetComponent from '../../WidgetComponent';
import EyeSvg from '../../../../assets/eye.svg';
import VariableFilters from '../../VariableFilters';

const WidgetCard = ({ widget_data, selectedWidgets, setSelectedWidgets }) => {
	const [showModal, setShowModal] = useState(false);
	const [queryVariableValues, setQueryVariableValues] = useState({});
	const isSelected = selectedWidgets?.filter((sw) => sw?.id === widget_data?.id)?.length > 0;

	const onSelect = () => {
		if (isSelected) {
			const newSelected = selectedWidgets?.filter((sw) => sw?.id !== widget_data?.id);
			setSelectedWidgets(newSelected);
		}

		if (!isSelected) {
			setSelectedWidgets([...selectedWidgets, { ...widget_data }]);
		}
	};

	return (
		<>
			<Container className={isSelected && 'selected'}>
				<Flex justifyContent="flex-start" alignItems="flex-start">
					<Checkbox checked={isSelected} onChange={() => onSelect()} />
					<Flex flex={1} justifyContent="space-between">
						<Flex direction="column">
							<Text marginLeft={8} size={14} bold>{widget_data?.name}</Text>
							<Text marginLeft={8} size={12}>{widget_data?.description}</Text>
						</Flex>
						<Flex direction="column" alignItems="flex-end" style={{ gap: '8px' }}>
							<TagDiv>
								<Tag>{widget_data?.widget_type}</Tag>
							</TagDiv>

							<Flex>
								<Button size="sm" ghost onClick={() => setShowModal(true)}>
									<EyeSvg style={{ height: 18, width: 18 }} />
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Container>

			{showModal && (
				<Modal
					show={showModal}
					onClose={() => setShowModal(false)}
					onOuterClick={() => setShowModal(false)}
					width={600}
				>
					<VariableFilters
						setQueryVariableValues={setQueryVariableValues}
						queryVariableValues={queryVariableValues}
						queryVariables={widget_data?.query_variables}
					/>
					<Flex display="block" padding="32px 16px">
						<WidgetComponent
							widget_id={widget_data?.id}
							widget_type={widget_data?.widget_type}
							query_variable_values={queryVariableValues}
						/>
					</Flex>
				</Modal>
			)}
		</>
	);
};

export default WidgetCard;
