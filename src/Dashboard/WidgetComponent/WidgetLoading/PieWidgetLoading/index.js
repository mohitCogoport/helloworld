import { Skeleton } from '@cogoport/front/components';
import React from 'react';
import { ChartsContainer } from '../styles';

const PieWidgetLoading = () => (
	<ChartsContainer>
		<Skeleton
			speed={2}
			width={500}
			height={300}
			viewBox="0 0 500 300"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="280" cy="158" r="97" />
		</Skeleton>
	</ChartsContainer>
);

export default PieWidgetLoading;
