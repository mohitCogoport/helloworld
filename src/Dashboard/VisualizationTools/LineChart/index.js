import React from 'react';
import { Line } from '../../Charts';

const LineChart = ({ data, layout, axisLeftLabel, axisBottomLabel, themeType }) => (
	<Line
		data={data}
		layout={layout}
		axisLeftLabel={axisLeftLabel}
		axisBottomLabel={axisBottomLabel}
		themeType={themeType}
	/>
);

export default LineChart;
