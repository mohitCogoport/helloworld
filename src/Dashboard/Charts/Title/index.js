import React from 'react';
import { Flex, Text } from '@cogoport/front/components';

const Title = ({ data }) => (
	<Flex
		direction="column"
		alignItems="center"
		style={{
			gap     : '8px',
			height  : '100%',
			padding : '16px',
		}}
	>
		<Text size={20} bold>{data?.title}</Text>

		<Text size={12}>{data?.description}</Text>
	</Flex>
);

export default Title;
