import React from 'react';
import { Flex } from '@cogoport/front/components';
import { StatsLoadingContainer } from './styles';

const StatsLoading = () => (
	<StatsLoadingContainer>
		<Flex alignItems="center" direction="column" marginBottom={16}>
			<div className="dots-bars-5" />
		</Flex>
	</StatsLoadingContainer>
);

export default StatsLoading;
