import { Skeleton } from '@cogoport/front/components';
import React from 'react';
import { ChartsContainer } from '../styles';

const FunnelWidgetLoading = () => (
	<ChartsContainer>
		<Skeleton
			speed={2}
			width={500}
			height={300}
			viewBox="0 0 500 300"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="339" y="120" rx="3" ry="3" width="98" height="65" />
			<rect x="22" y="75" rx="3" ry="3" width="119" height="153" />
			<rect x="238" y="107" rx="3" ry="3" width="115" height="90" />
			<rect x="139" y="91" rx="3" ry="3" width="115" height="120" />
			<rect x="435" y="129" rx="0" ry="0" width="79" height="47" />
		</Skeleton>
	</ChartsContainer>
);

export default FunnelWidgetLoading;
