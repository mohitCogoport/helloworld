import React from 'react';
import { KpiStatsBox } from '../../../common/components/Charts';

const DummyKpiStats = () => {
	const data = [{ label: 'Count', value: 83251, icon: 'stats' }];
	return <KpiStatsBox data={data} />;
};

export default DummyKpiStats;
