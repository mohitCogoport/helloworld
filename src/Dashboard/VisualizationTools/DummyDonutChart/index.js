import { Flex } from '@cogoport/front/components';
import React from 'react';
import { Donut } from '../../../common/components/Charts';
import { ChartsContainer } from '../styles';


const DummyDonutChart = () => {
    const pieData = [
		{
			id    : 'python',
			label : 'python',
			value : 235,
		},
		{
			id    : 'hack',
			label : 'hack',
			value : 203,
		},
		{
			id    : 'rust',
			label : 'rust',
			value : 416,
		},
		{
			id    : 'ruby',
			label : 'ruby',
			value : 57,
		},
		{
			id    : 'make',
			label : 'make',
			value : 332,
		},
	];


    return (
        <Flex>
            <ChartsContainer>
                <Donut data={pieData} layout="horizontal"/>
            </ChartsContainer>
        </Flex>
    )
}

export default DummyDonutChart
