import React from 'react';
import TitleChart from '../../../VisualizationTools/TitleChart';
import { ChartsContainer, SubChartContainer } from '../styles';

const TitleWidget = ({ widgetData, gridItemHeight }) => {
	const widget_config = widgetData?.widget_config?.widget_config_data;

	return (
		<ChartsContainer
			gridItemHeight={gridItemHeight}
			isTitleChart
		>
			<SubChartContainer>
				<TitleChart
					data={{
						title       : widget_config?.title,
						description : widget_config?.description,
					}}
				/>
			</SubChartContainer>
		</ChartsContainer>
	);
};

export default TitleWidget;
