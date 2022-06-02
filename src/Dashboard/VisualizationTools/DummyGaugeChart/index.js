import React from 'react';
import { Gauge } from '../../../common/components/Charts';

const DummyGaugeChart = () => {
	const data = { chartData: [{ value: 0.3722 }] };
	return <Gauge data={data} />;
};

export default DummyGaugeChart;
