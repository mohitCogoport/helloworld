import React from 'react';
import { Trend } from '../../Charts';

const TrendChart = ({ data, themeType }) => (
	<Trend data={data} themeType={themeType} />
);

export default TrendChart;
