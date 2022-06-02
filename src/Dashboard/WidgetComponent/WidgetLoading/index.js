import React from 'react';
import { Flex } from '@cogoport/front/components';
import { CenterLoading } from './styles';
import StatsLoading from '../../loading/stats-loading';
import AreaWidgetLoading from './AreaWidgetLoading';
import BarWidgetLoading from './BarWidgetLoading';
import DonutWidgetLoading from './DonutWidgetLoading';
import FunnelWidgetLoading from './FunnelWidgetLoading';
import GaugeWidgetLoading from './GaugeWidgetLoading';
import LineWidgetLoading from './LineWidgetLoading';
import PieWidgetLoading from './PieWidgetLoading';

const WidgetLoading = ({ widget_type }) => {
	const WIDGET_MAPPING = {
		area   : AreaWidgetLoading,
		bar    : BarWidgetLoading,
		donut  : DonutWidgetLoading,
		funnel : FunnelWidgetLoading,
		gauge  : GaugeWidgetLoading,
		line   : LineWidgetLoading,
		pie    : PieWidgetLoading,
	};

	const LoadingComponent = WIDGET_MAPPING[widget_type];

	return (
		<CenterLoading>
			<Flex className="center" justifyContent="center" alignItems="center">
				{LoadingComponent ? <LoadingComponent />
					: <StatsLoading /> }
			</Flex>
		</CenterLoading>
	);
};

export default WidgetLoading;
