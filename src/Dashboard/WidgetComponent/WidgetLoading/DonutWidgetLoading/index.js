import React from 'react';
import { Flex, Skeleton } from '@cogoport/front/components';
import { ChartsContainer } from '../styles';

const DonutWidgetLoading = () => (
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

export default DonutWidgetLoading;
