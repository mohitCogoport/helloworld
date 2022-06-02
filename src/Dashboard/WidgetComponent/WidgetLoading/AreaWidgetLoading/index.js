import { Skeleton } from '@cogoport/front/components';
import React from 'react';
import { ChartsContainer } from '../styles';

const AreaWidgetLoading = () => (
	<ChartsContainer>
		<Skeleton
			speed={2}
			width={500}
			height={300}
			viewBox="0 0 500 300"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="7" y="71" rx="3" ry="3" width="480" height="31" />
			<rect x="7" y="133" rx="3" ry="3" width="481" height="31" />
			<rect x="7" y="194" rx="3" ry="3" width="481" height="31" />
			<rect x="6" y="260" rx="0" ry="0" width="482" height="31" />
			<rect x="358" y="236" rx="0" ry="0" width="6" height="2" />
			<rect x="7" y="11" rx="0" ry="0" width="480" height="31" />
		</Skeleton>
	</ChartsContainer>
);

export default AreaWidgetLoading;
