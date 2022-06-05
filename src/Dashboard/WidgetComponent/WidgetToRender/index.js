import React from 'react';
import FunnelWidget from '../Widgets/FunnelWidget';
import DonutWidget from '../Widgets/DonutWidget';
import PieWidget from '../Widgets/PieWidget';
import BarWidget from '../Widgets/BarWidget';
import KpiStatsBoxWidget from '../Widgets/KpiStatsBoxWidget';
import TableWidget from '../Widgets/TableWidget';
import TitleWidget from '../Widgets/TitleWidget';
import LineWidget from '../Widgets/LineWidget';
import AreaWidget from '../Widgets/AreaWidget';
import TrendWidget from '../Widgets/TrendWidget';
import GaugeWidget from '../Widgets/GaugeWidget';

const WidgetToRender = ({
	widget_type,
	widgetData,
	themeType,
	showPagination,
	paginationData,
	setParams,
}) => {
	const TYPE_MAPPING = {
		funnel        : { Widget: FunnelWidget },
		donut         : { Widget: DonutWidget },
		pie           : { Widget: PieWidget },
		bar           : { Widget: BarWidget },
		kpi_stats_box : { Widget: KpiStatsBoxWidget },
		table         : { Widget: TableWidget },
		title         : { Widget: TitleWidget },
		line          : { Widget: LineWidget },
		area          : { Widget: AreaWidget },
		trend         : { Widget: TrendWidget },
		gauge         : { Widget: GaugeWidget },
	};

	const ComponentWidget = widget_type in TYPE_MAPPING ? TYPE_MAPPING[widget_type].Widget : null;

	if (!ComponentWidget) return null;

	return (
		<ComponentWidget
			widgetData={widgetData}
			themeType={themeType}
			showPagination={showPagination}
			paginationData={paginationData}
			setParams={setParams}
			// gridItemHeight={gridItemHeight}
		/>
	);
};

export default WidgetToRender;
