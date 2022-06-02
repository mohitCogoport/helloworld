import { Flex, Text } from '@cogoport/front/components';
import React from 'react';
import BarChart from '../../../VisualizationTools/BarChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer } from '../styles';

const BarWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const chartData = [];
		const valueKeys = [];
		const indexByKey = widget_config?.x_axis;
		const xAxisLabel = widget_config?.x_axis_label;
		const yAxisLabel = widget_config?.y_axis_label;
		const groupMode = widget_config?.group_mode;

		query_data?.forEach((result) => {
			const dataObj = {};
			dataObj[widget_config.x_axis] = formatData(result[widget_config?.x_axis]);
			widget_config?.y_axis_fields?.forEach((y_axis_field) => {
				dataObj[y_axis_field.y_axis] = formatData(result[y_axis_field.y_axis]);
			});
			chartData.push(dataObj);
		});

		widget_config?.y_axis_fields?.forEach((y_axis_field) => { valueKeys.push(y_axis_field.y_axis); });

		return (
			<ChartsContainer gridItemHeight={gridItemHeight}>
				<Flex justifyContent="center">
					<Text>{widgetData?.name}</Text>
				</Flex>
				<BarChart
					data={chartData}
					indexByKey={indexByKey}
					valueKeys={valueKeys}
					xAxisLabel={xAxisLabel}
					yAxisLabel={yAxisLabel}
					groupMode={groupMode}
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

export default BarWidget;
