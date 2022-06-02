import React from 'react';
import { Bar } from '../../Charts';

const BarChart = ({ data, layout, valueKeys, indexByKey, xAxisLabel, yAxisLabel, groupMode, themeType }) => (
	<Bar
		data={data}
		layout={layout}
		valueKeys={valueKeys}
		indexByKey={indexByKey}
		xAxisLabel={xAxisLabel}
		yAxisLabel={yAxisLabel}
		groupMode={groupMode}
		themeType={themeType}
	/>
);

export default BarChart;
