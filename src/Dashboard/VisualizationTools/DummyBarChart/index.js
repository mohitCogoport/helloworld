import { Flex } from '@cogoport/front/components';
import React from 'react';
import { Bar } from '../../../common/components/Charts';
import { ChartsContainer } from '../styles';


const DummyBarChart = () => {
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

    return (
        <Flex>
            <ChartsContainer>
					<Bar
						data={barData}
						valueKeys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
						indexByKey="country"
						xAxisLabel="country"
						yAxisLabel="food"
					/>
            </ChartsContainer>
        </Flex>
    )
}

export default DummyBarChart
