import React from 'react';
import { Container, Heading, Content, IcContainer, Wrapper } from './styles';
import ICNonFunded from './ic-empty-non-funded.svg';

const EmptyState = ({height = '100%', width = '100%'}) => (
	<Container>
		<Wrapper>
			<Heading>No records found</Heading>
			<Content>Looks like you do not have any records for this section</Content>
		</Wrapper>
		<IcContainer>
			<ICNonFunded height={height} width={width} style={{ marginLeft: 20 }} />
		</IcContainer>
	</Container>
);

EmptyState.propTypes = {};

export default EmptyState;
