import React from 'react';
import { Flex, Text } from '@cogoport/front/components';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import FunnelChart from './FunnelChart';
import LineChart from './LineChart';
import AreaChart from './AreaChart';
import { ChartsContainer, Container } from './styles';

const VisualizationTools = () => {
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

	const barData = [
		{
			country        : 'AD',
			'hot dog'      : 41,
			'hot dogColor' : 'hsl(1, 70%, 50%)',
			burger         : 85,
			burgerColor    : 'hsl(266, 70%, 50%)',
			sandwich       : 123,
			sandwichColor  : 'hsl(345, 70%, 50%)',
			kebab          : 136,
			kebabColor     : 'hsl(142, 70%, 50%)',
			fries          : 71,
			friesColor     : 'hsl(5, 70%, 50%)',
			donut          : 43,
			donutColor     : 'hsl(240, 70%, 50%)',
		},
		{
			country        : 'AE',
			'hot dog'      : 118,
			'hot dogColor' : 'hsl(246, 70%, 50%)',
			burger         : 111,
			burgerColor    : 'hsl(330, 70%, 50%)',
			sandwich       : 21,
			sandwichColor  : 'hsl(19, 70%, 50%)',
			kebab          : 147,
			kebabColor     : 'hsl(351, 70%, 50%)',
			fries          : 157,
			friesColor     : 'hsl(164, 70%, 50%)',
			donut          : 46,
			donutColor     : 'hsl(355, 70%, 50%)',
		},
		{
			country        : 'AF',
			'hot dog'      : 53,
			'hot dogColor' : 'hsl(133, 70%, 50%)',
			burger         : 144,
			burgerColor    : 'hsl(135, 70%, 50%)',
			sandwich       : 47,
			sandwichColor  : 'hsl(132, 70%, 50%)',
			kebab          : 136,
			kebabColor     : 'hsl(74, 70%, 50%)',
			fries          : 116,
			friesColor     : 'hsl(341, 70%, 50%)',
			donut          : 40,
			donutColor     : 'hsl(31, 70%, 50%)',
		},
		{
			country        : 'AG',
			'hot dog'      : 123,
			'hot dogColor' : 'hsl(257, 70%, 50%)',
			burger         : 190,
			burgerColor    : 'hsl(304, 70%, 50%)',
			sandwich       : 170,
			sandwichColor  : 'hsl(305, 70%, 50%)',
			kebab          : 21,
			kebabColor     : 'hsl(132, 70%, 50%)',
			fries          : 68,
			friesColor     : 'hsl(171, 70%, 50%)',
			donut          : 66,
			donutColor     : 'hsl(197, 70%, 50%)',
		},
		{
			country        : 'AI',
			'hot dog'      : 124,
			'hot dogColor' : 'hsl(186, 70%, 50%)',
			burger         : 200,
			burgerColor    : 'hsl(26, 70%, 50%)',
			sandwich       : 129,
			sandwichColor  : 'hsl(74, 70%, 50%)',
			kebab          : 13,
			kebabColor     : 'hsl(211, 70%, 50%)',
			fries          : 132,
			friesColor     : 'hsl(304, 70%, 50%)',
			donut          : 154,
			donutColor     : 'hsl(242, 70%, 50%)',
		},
		{
			country        : 'AL',
			'hot dog'      : 141,
			'hot dogColor' : 'hsl(166, 70%, 50%)',
			burger         : 150,
			burgerColor    : 'hsl(256, 70%, 50%)',
			sandwich       : 122,
			sandwichColor  : 'hsl(257, 70%, 50%)',
			kebab          : 118,
			kebabColor     : 'hsl(203, 70%, 50%)',
			fries          : 9,
			friesColor     : 'hsl(136, 70%, 50%)',
			donut          : 170,
			donutColor     : 'hsl(351, 70%, 50%)',
		},
		{
			country        : 'AM',
			'hot dog'      : 126,
			'hot dogColor' : 'hsl(116, 70%, 50%)',
			burger         : 186,
			burgerColor    : 'hsl(192, 70%, 50%)',
			sandwich       : 1,
			sandwichColor  : 'hsl(194, 70%, 50%)',
			kebab          : 172,
			kebabColor     : 'hsl(256, 70%, 50%)',
			fries          : 82,
			friesColor     : 'hsl(214, 70%, 50%)',
			donut          : 72,
			donutColor     : 'hsl(44, 70%, 50%)',
		},
	];

	const funnelData = [
		{
			id    : 'step_sent',
			value : 78771,
			label : 'Sent',
		},
		{
			id    : 'step_viewed',
			value : 51430,
			label : 'Viewed',
		},
		{
			id    : 'step_clicked',
			value : 31546,
			label : 'Clicked',
		},
		{
			id    : 'step_add_to_card',
			value : 19129,
			label : 'Add To Card',
		},
		{
			id    : 'step_purchased',
			value : 12442,
			label : 'Purchased',
		},
	];

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
		<Container>
			<Flex justifyContent="space-between">
				<ChartsContainer>
					<Text>Pie Chart</Text>
					<PieChart data={pieData} />
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Donut Chart</Text>
					<DonutChart data={pieData} />
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Bar Chart</Text>
					<BarChart
						data={barData}
						valueKeys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
						indexByKey="country"
						xAxisLabel="country"
						yAxisLabel="food"
					/>
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Bar Chart</Text>
					<BarChart
						layout="horizontal"
						className="full"
						data={barData}
						valueKeys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
						indexByKey="country"
						xAxisLabel="country"
						yAxisLabel="food"
					/>
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Funnel Chart</Text>
					<FunnelChart direction="horizontal" data={funnelData} />
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Line Chart</Text>
					<LineChart
						direction="horizontal"
						data={lineData}
					/>
				</ChartsContainer>
			</Flex>
			<Flex justifyContent="space-between" margin="16px 0">
				<ChartsContainer>
					<Text>Area Chart</Text>
					<AreaChart data={areaData} />
				</ChartsContainer>
			</Flex>
		</Container>
	);
};

export default VisualizationTools;
