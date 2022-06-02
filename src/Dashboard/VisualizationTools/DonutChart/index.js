import React from 'react';
import { Donut } from '../../Charts';

const DonutChart = ({ data, layout, themeType }) => (
	<Donut data={data} layout={layout} themeType={themeType} />
);

export default DonutChart;
