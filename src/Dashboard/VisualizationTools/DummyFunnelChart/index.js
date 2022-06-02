import { Flex } from '@cogoport/front/components';
import React from 'react';
import { Funnel } from '../../../common/components/Charts';
import { ChartsContainer } from '../styles';


const DummyFunnelChart = () => {
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


    return (
        <Flex>
            <ChartsContainer>
                <Funnel data={funnelData} direction="horizontal"/>
            </ChartsContainer>
        </Flex>
    )
}

export default DummyFunnelChart
