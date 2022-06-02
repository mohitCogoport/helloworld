import React from 'react';
import { Trend } from '../../../common/components/Charts';

const DummyTrendChart = () => {
	const data = { chartData: [{ id: 'first', value: 10029 }, { id: 'second', value: 13362 }], label: 'Growth' };
	return <Trend data={data} />;
};

export default DummyTrendChart;
