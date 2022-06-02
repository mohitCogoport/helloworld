import { Flex, Text } from '@cogoport/front/components';
import React from 'react';
import LineChart from '../../../VisualizationTools/LineChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer } from '../styles';

const LineWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const x_axis_label = widget_config?.x_axis_label;
		const y_axis_label = widget_config?.y_axis_label;

		const data = widget_config?.y_axis_fields?.map((y_axis_field) => ({
			id   : y_axis_field?.y_axis,
			data : query_data?.map((result) => ({
				x : formatData(result[widget_config?.x_axis]),
				y : formatData(result[y_axis_field?.y_axis]),
			})) || [],
		})) || [];

		return (
			<ChartsContainer gridItemHeight={gridItemHeight}>
				<Flex justifyContent="center">
					<Text>{widgetData?.name}</Text>
				</Flex>
				<LineChart
					data={data}
					themeType={themeType}
					axisBottomLabel={x_axis_label}
					axisLeftLabel={y_axis_label}
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

export default LineWidget;
