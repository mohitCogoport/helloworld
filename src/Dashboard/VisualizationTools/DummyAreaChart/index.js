import { Flex } from '@cogoport/front/components';
import React from 'react';
import { Area } from '../../../common/components/Charts';
import { ChartsContainer } from '../styles';

const DummyAreaChart = () => {
	const areaData = [
		{
			id   : 'JavaScript',
			data : [
				{
					x : 2000,
					y : 27,
				},
				{
					x : 2001,
					y : 10,
				},
				{
					x : 2002,
					y : 16,
				},
				{
					x : 2003,
					y : 13,
				},
				{
					x : 2004,
					y : 22,
				},
				{
					x : 2005,
					y : 15,
				},
			],
		},
		{
			id   : 'ReasonML',
			data : [
				{
					x : 2000,
					y : 28,
				},
				{
					x : 2001,
					y : 25,
				},
				{
					x : 2002,
					y : 13,
				},
				{
					x : 2003,
					y : 23,
				},
				{
					x : 2004,
					y : 18,
				},
				{
					x : 2005,
					y : 18,
				},
			],
		},
		{
			id   : 'TypeScript',
			data : [
				{
					x : 2000,
					y : 14,
				},
				{
					x : 2001,
					y : 25,
				},
				{
					x : 2002,
					y : 14,
				},
				{
					x : 2003,
					y : 20,
				},
				{
					x : 2004,
					y : 23,
				},
				{
					x : 2005,
					y : 29,
				},
			],
		},
		{
			id   : 'Elm',
			data : [
				{
					x : 2000,
					y : 10,
				},
				{
					x : 2001,
					y : 23,
				},
				{
					x : 2002,
					y : 10,
				},
				{
					x : 2003,
					y : 22,
				},
				{
					x : 2004,
					y : 13,
				},
				{
					x : 2005,
					y : 22,
				},
			],
		},
		{
			id   : 'CoffeeScript',
			data : [
				{
					x : 2000,
					y : 22,
				},
				{
					x : 2001,
					y : 23,
				},
				{
					x : 2002,
					y : 26,
				},
				{
					x : 2003,
					y : 17,
				},
				{
					x : 2004,
					y : 13,
				},
				{
					x : 2005,
					y : 28,
				},
			],
		},
	];

	return (
		<Flex>
			<ChartsContainer>
				<Area data={areaData} layout="horizontal" />
			</ChartsContainer>
		</Flex>
	);
};

export default DummyAreaChart;
