import React from 'react';
import { Pie } from '../../Charts';

const PieChart = ({ data, themeType }) => (
	<Pie data={data} themeType={themeType} />
);

export default PieChart;
