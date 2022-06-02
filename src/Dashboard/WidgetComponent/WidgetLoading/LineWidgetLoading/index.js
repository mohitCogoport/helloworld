import { Skeleton } from '@cogoport/front/components';
import React from 'react';
import { ChartsContainer } from '../styles';

const LineWidgetLoading = () => (
	<ChartsContainer>
		<Skeleton
			speed={2}
			width={500}
			height={300}
			viewBox="0 0 500 300"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="11" y="196" rx="3" ry="3" width="460" height="13" />
			<rect x="12" y="248" rx="3" ry="3" width="458" height="13" />
			<rect x="11" y="147" rx="3" ry="3" width="459" height="13" />
			<rect x="12" y="47" rx="3" ry="3" width="458" height="14" />
			<rect x="12" y="97" rx="3" ry="3" width="458" height="14" />
		</Skeleton>
	</ChartsContainer>
);

export default LineWidgetLoading;
