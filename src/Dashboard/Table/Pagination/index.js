import React from 'react';
import { Flex, Text } from '@cogoport/front/components';
import {ActiveRightArrow} from './assets/index';
import {ActiveLeftArrow} from './assets/index';
import {InactiveLeftArrow} from './assets/index';
import {InactiveRightArrow} from './assets/index';

const Pagination = ({ showPagination = false, showPaginationOnLessData = false, paginationData, setParams, dataCount }) => {
	if (!showPagination || (!showPaginationOnLessData && paginationData?.total_count <= paginationData?.page_limit)) return null;

	const totalCount = paginationData?.total_count || 0;
	const resultsCount = dataCount || 0;
	const pageLimit = paginationData?.page_limit || 0;
	const currentPage = paginationData?.page || 0;
	const totalPage = paginationData?.total || 0;

	const firstValue = dataCount === 0 ? 0 : (currentPage - 1) * pageLimit + 1;
	const lastValue = currentPage * pageLimit < totalCount ? currentPage * pageLimit : totalCount;

	const onRightArrowClick = () => {
		setParams((p) => ({ ...p, page: currentPage + 1 }));
	};

	const onLeftArrowClick = () => {
		setParams((p) => ({ ...p, page: currentPage - 1 }));
	};

	return (
		<Flex justifyContent="flex-end" padding="8px 0">
			<Text color="#5936F0" size={12}>Showing {firstValue} - {lastValue} out of {totalCount}</Text>
			{
				currentPage === 1 || resultsCount === 0
					? <InactiveLeftArrow size={1.2} style={{ marginLeft: '20px' }} />
					: <ActiveLeftArrow size={1.2} style={{ marginLeft: '16px', cursor: 'pointer' }} onClick={onLeftArrowClick} />
			}
			{
				currentPage === totalPage || resultsCount === 0
					? <InactiveRightArrow size={1.2} style={{ marginLeft: '20px' }} />
					: <ActiveRightArrow size={1.2} style={{ marginLeft: '16px', cursor: 'pointer' }} onClick={onRightArrowClick} />
			}

		</Flex>
	);
};

export default Pagination;
