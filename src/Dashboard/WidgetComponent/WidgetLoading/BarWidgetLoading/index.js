import { Skeleton } from '@cogoport/front/components';
import React from 'react';
import { ChartsContainer } from '../styles';

const BarWidgetLoading = () => (
	<ChartsContainer>
		<Skeleton
			speed={2}
			width={500}
			height={300}
			viewBox="0 0 500 300"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="410" y="180" rx="3" ry="3" width="37" height="96" />
			<rect x="325" y="97" rx="3" ry="3" width="37" height="180" />
			<rect x="237" y="28" rx="3" ry="3" width="38" height="250" />
			<rect x="64" y="61" rx="3" ry="3" width="38" height="216" />
			<rect x="151" y="126" rx="3" ry="3" width="38" height="151" />
		</Skeleton>
	</ChartsContainer>
);

export default BarWidgetLoading;
