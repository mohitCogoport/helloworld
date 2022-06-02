import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@cogoport/front/components';
import { ChartsContainer } from '../styles';
import TableChart from '../../../VisualizationTools/TableChart';
import Pagination from '../../../Table/Pagination';

const TableWidget = ({
	widgetData,
	themeType,
	showPagination = false,
	gridItemHeight,
}) => {
	const query_data = widgetData?.query_data;
	const [params, setParams] = useState({ page: 1, page_limit: 10 });

	const [paginationData, setPaginationData] = useState({
		total_count : query_data?.length || 0,
		page_limit  : params?.page_limit,
		total       : query_data?.length % params?.page_limit === 0
			? Math.floor(query_data?.length / params?.page_limit)
			: Math.floor((query_data?.length / params?.page_limit)) + 1,
		page: params?.page,
	});

	useEffect(() => {
		setPaginationData({ ...paginationData, page: params?.page });
	}, [params]);

	const widget_config = widgetData?.widget_config?.widget_config_data?.table_fields;

	const renderWidget = () => {
		const chartData = query_data?.map((row) => (widget_config?.reduce((pv, cv) => ({ ...pv, [cv.id]: row[cv.id] }), {}))) || [];

		const lowerOffset = (paginationData?.page - 1) * params?.page_limit;

		const upperOffset = (paginationData?.page - 1) * params?.page_limit + params?.page_limit;

		const showData = chartData.slice(lowerOffset, upperOffset);

		return (
			<ChartsContainer gridItemHeight={gridItemHeight}>
				<Flex justifyContent="center">
					<Text>{widgetData?.name}</Text>
				</Flex>
				<Pagination
					showPagination={showPagination}
					showPaginationOnLessData
					paginationData={paginationData}
					setParams={setParams}
					dataCount={query_data.length}
				/>
				<TableChart data={showData} themeType={themeType} />
			</ChartsContainer>
		);
	};

	return (
		<Flex display="block">
			{renderWidget()}
		</Flex>
	);
};

export default TableWidget;
