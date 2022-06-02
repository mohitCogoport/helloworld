import React from 'react';
import { Funnel } from '../../Charts';

const FunnelChart = ({ data, direction, themeType }) => (
	<Funnel data={data} direction={direction} themeType={themeType} />
);

export default FunnelChart;
