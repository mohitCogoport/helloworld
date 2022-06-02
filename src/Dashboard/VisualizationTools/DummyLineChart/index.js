import { Flex } from '@cogoport/front/components';
import React from 'react';
import { Line } from '../../../common/components/Charts';
import { ChartsContainer } from '../styles';


const DummyLineChart = () => {
    const lineData = [
		{
			id    : 'japan',
			color : 'hsl(242, 70%, 50%)',
			data  : [
				{
					x : 'plane',
					y : 222,
				},
				{
					x : 'helicopter',
					y : 123,
				},
				{
					x : 'boat',
					y : 106,
				},
				{
					x : 'train',
					y : 174,
				},
				{
					x : 'subway',
					y : 88,
				},
				{
					x : 'bus',
					y : 199,
				},
				{
					x : 'car',
					y : 17,
				},
				{
					x : 'moto',
					y : 271,
				},
				{
					x : 'bicycle',
					y : 203,
				},
				{
					x : 'horse',
					y : 117,
				},
				{
					x : 'skateboard',
					y : 134,
				},
				{
					x : 'others',
					y : 239,
				},
			],
		},
		{
			id    : 'france',
			color : 'hsl(107, 70%, 50%)',
			data  : [
				{
					x : 'plane',
					y : 270,
				},
				{
					x : 'helicopter',
					y : 215,
				},
				{
					x : 'boat',
					y : 103,
				},
				{
					x : 'train',
					y : 133,
				},
				{
					x : 'subway',
					y : 151,
				},
				{
					x : 'bus',
					y : 233,
				},
				{
					x : 'car',
					y : 174,
				},
				{
					x : 'moto',
					y : 91,
				},
				{
					x : 'bicycle',
					y : 152,
				},
				{
					x : 'horse',
					y : 83,
				},
				{
					x : 'skateboard',
					y : 152,
				},
				{
					x : 'others',
					y : 212,
				},
			],
		},
		{
			id    : 'us',
			color : 'hsl(192, 70%, 50%)',
			data  : [
				{
					x : 'plane',
					y : 56,
				},
				{
					x : 'helicopter',
					y : 222,
				},
				{
					x : 'boat',
					y : 217,
				},
				{
					x : 'train',
					y : 199,
				},
				{
					x : 'subway',
					y : 214,
				},
				{
					x : 'bus',
					y : 103,
				},
				{
					x : 'car',
					y : 130,
				},
				{
					x : 'moto',
					y : 47,
				},
				{
					x : 'bicycle',
					y : 229,
				},
				{
					x : 'horse',
					y : 142,
				},
				{
					x : 'skateboard',
					y : 70,
				},
				{
					x : 'others',
					y : 41,
				},
			],
		},
		{
			id    : 'germany',
			color : 'hsl(91, 70%, 50%)',
			data  : [
				{
					x : 'plane',
					y : 132,
				},
				{
					x : 'helicopter',
					y : 108,
				},
				{
					x : 'boat',
					y : 181,
				},
				{
					x : 'train',
					y : 99,
				},
				{
					x : 'subway',
					y : 224,
				},
				{
					x : 'bus',
					y : 204,
				},
				{
					x : 'car',
					y : 6,
				},
				{
					x : 'moto',
					y : 220,
				},
				{
					x : 'bicycle',
					y : 248,
				},
				{
					x : 'horse',
					y : 224,
				},
				{
					x : 'skateboard',
					y : 26,
				},
				{
					x : 'others',
					y : 136,
				},
			],
		},
		{
			id    : 'norway',
			color : 'hsl(333, 70%, 50%)',
			data  : [
				{
					x : 'plane',
					y : 200,
				},
				{
					x : 'helicopter',
					y : 135,
				},
				{
					x : 'boat',
					y : 195,
				},
				{
					x : 'train',
					y : 79,
				},
				{
					x : 'subway',
					y : 275,
				},
				{
					x : 'bus',
					y : 262,
				},
				{
					x : 'car',
					y : 276,
				},
				{
					x : 'moto',
					y : 219,
				},
				{
					x : 'bicycle',
					y : 150,
				},
				{
					x : 'horse',
					y : 64,
				},
				{
					x : 'skateboard',
					y : 141,
				},
				{
					x : 'others',
					y : 146,
				},
			],
		},
	];
    return (
        <Flex>
            <ChartsContainer>
                <Line data={lineData} layout="horizontal"/>
            </ChartsContainer>
        </Flex>
    )
}

export default DummyLineChart
