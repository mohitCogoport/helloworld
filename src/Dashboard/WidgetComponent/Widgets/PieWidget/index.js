import React from 'react';
import { Flex, Text } from '@cogoport/front/components';
import PieChart from '../../../VisualizationTools/PieChart';
import { ChartsContainer } from '../styles';
import formatData from '../../../utils/format-data';

const PieWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const chartData = [];
		query_data?.forEach((result) => {
			const dataItem = {};
			dataItem.id = result[widget_config?.id];
			dataItem.value = formatData(result[widget_config?.value]);
			dataItem.label = result[widget_config?.id];
			chartData.push(dataItem);
		});
		return (
			<ChartsContainer gridItemHeight={gridItemHeight}>
				<Flex justifyContent="center">
					<Text>{widgetData?.name}</Text>
				</Flex>
				<PieChart data={chartData} themeType={themeType} />
			</ChartsContainer>
		);
	};

	return (
		<Flex display="block">
			{renderWidget()}
		</Flex>
	);
};

export default PieWidget;
