import { Flex, Text } from '@cogoport/front/components'; import KpiStatsBoxChart from '../../../VisualizationTools/KpiStatsBoxChart';
import { ChartsContainer, SubChartContainer } from '../styles';

const KpiStatsBoxWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const chartData = [{
			label : widget_config?.id,
			value : query_data?.[0][widget_config?.id] || '',
			icon  : widget_config?.icon || '',
		}];

		return (
			<ChartsContainer
				gridItemHeight={gridItemHeight}
				isKpiStatsBoxChart
			>
				<SubChartContainer>
					<Flex justifyContent="center">
						<Text>{widgetData?.name}</Text>
					</Flex>
					<KpiStatsBoxChart data={chartData} themeType={themeType} />
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

export default KpiStatsBoxWidget;
