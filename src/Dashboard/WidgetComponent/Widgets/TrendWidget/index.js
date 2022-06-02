import { Flex, Text } from '@cogoport/front/components';
import TrendChart from '../../../VisualizationTools/TrendChart';
import formatData from '../../../utils/format-data';
import { ChartsContainer, SubChartContainer } from '../styles';

const TrendWidget = ({ widgetData, themeType, gridItemHeight }) => {
	const query_data = widgetData?.query_data;
	const widget_config = widgetData?.widget_config?.widget_config_data;

	const renderWidget = () => {
		const data = {
			label     : widget_config?.label,
			chartData : query_data?.map((result) => ({
				id    : formatData(result[widget_config?.id] || ''),
				value : formatData(result[widget_config?.value] || ''),
			})) || [],
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
					<TrendChart data={data} themeType={themeType} />
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

export default TrendWidget;
