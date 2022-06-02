import React from 'react';
import { Flex } from '@cogoport/front/components';
import { Container, PartnerTitle, AnimationContainer, ColoredContainer } from './styles';

const DashboardLoading = ({ title = 'Dashboard' }) => (
	<Container>
		<Flex alignItems="center" direction="column">
			<PartnerTitle>Loading {title}...</PartnerTitle>
			<AnimationContainer>
				<ColoredContainer className="blue" />
				<ColoredContainer className="yellow" />
				<ColoredContainer className="green" />
				<ColoredContainer className="black" />
			</AnimationContainer>
		</Flex>
	</Container>
);

export default DashboardLoading;
