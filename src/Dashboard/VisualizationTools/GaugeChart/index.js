import React from 'react';
import { Gauge } from '../../Charts';

const GaugeChart = ({ data, themeType }) => (
	<Gauge data={data} themeType={themeType} />
);

export default GaugeChart;
