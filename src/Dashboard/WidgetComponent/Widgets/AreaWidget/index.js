import { Flex, Text } from '@cogoport/front/components';
import React from 'react';
import AreaChart from '../../../VisualizationTools/AreaChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer } from '../styles';

const AreaWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const data = [];
		widget_config?.area_fields?.forEach((area_field) => {
			const dataItem = {};
			dataItem.id = area_field?.id;
			dataItem.data = [];
			query_data?.forEach((result) => {
				const dataObj = {};
				dataObj.x = formatData(result[area_field?.x_axis]);
				dataObj.y = formatData(result[area_field?.y_axis]);
				dataItem.data.push(dataObj);
			});
			data.push(dataItem);
		});

		return (
			<ChartsContainer gridItemHeight={gridItemHeight}>
				<Flex justifyContent="center">
					<Text>{widgetData?.name}</Text>
				</Flex>
				<AreaChart
					data={data}
					themeType={themeType}
				/>
			</ChartsContainer>
		);
	};

	return (
		<Flex display="block">
			{renderWidget()}
		</Flex>
	);
};

export default AreaWidget;
