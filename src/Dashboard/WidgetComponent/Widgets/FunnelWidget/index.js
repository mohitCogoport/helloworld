import { Flex, Text } from '@cogoport/front/components';
import React from 'react';
import FunnelChart from '../../../VisualizationTools/FunnelChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer } from '../styles';

const FunnelWidget = ({ widgetData, themeType, gridItemHeight }) => {
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
				<FunnelChart data={chartData} themeType={themeType} />
			</ChartsContainer>
		);
	};

	return (
		<Flex display="block">
			{renderWidget()}
		</Flex>
	);
};

export default FunnelWidget;
