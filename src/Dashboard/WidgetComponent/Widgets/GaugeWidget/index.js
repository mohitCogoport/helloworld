import { Flex, Text } from '@cogoport/front/components';
import GaugeChart from '../../../VisualizationTools/GaugeChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer, SubChartContainer } from '../styles';

const GaugeWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const data = {
			label     : widget_config?.label,
			chartData : query_data?.map((result) => (
				{ value: formatData(result[widget_config?.value] || '') })) || [],
		};

		return (
			<ChartsContainer
				gridItemHeight={gridItemHeight}
				style={{ height: 'auto' }}
			>
				<SubChartContainer>
					<Flex justifyContent="center">
						<Text>{widgetData?.name}</Text>
					</Flex>
					<GaugeChart data={data} themeType={themeType} />
				</SubChartContainer>
			</ChartsContainer>
		);
	};

	return (
		<Flex display="block">
			{renderWidget()}
		</Flex>
	);
};

export default GaugeWidget;
