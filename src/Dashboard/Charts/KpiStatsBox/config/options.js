import { Flex, Text } from '@cogoport/front/components';
import StatsSvg from '../../../assets/kpi-icons/stats.svg';
import MoneySvg from '../../../assets/kpi-icons/money.svg';
import UsersSvg from '../../../assets/kpi-icons/users.svg';
import ChartSvg from '../../../assets/kpi-icons/chart.svg';
import ContainerSvg from '../../../assets/kpi-icons/container.svg';

const options = [
	{
		label : <Flex alignItems="center"><StatsSvg /><Text marginLeft={8}>Stats</Text></Flex>,
		value : 'stats',
		icon  : <StatsSvg />,
	},
	{
		label : <Flex alignItems="center"><MoneySvg /><Text marginLeft={8}>Money</Text></Flex>,
		value : 'money',
		icon  : <MoneySvg />,
	},
	{
		label : <Flex alignItems="center"><UsersSvg /><Text marginLeft={8}>Users</Text></Flex>,
		value : 'users',
		icon  : <UsersSvg />,
	},
	{
		label : <Flex alignItems="center"><ChartSvg /><Text marginLeft={8}>Chart</Text></Flex>,
		value : 'chart',
		icon  : <ChartSvg />,
	},
	{
		label : <Flex alignItems="center"><ContainerSvg /><Text marginLeft={8}>Container</Text></Flex>,
		value : 'container',
		icon  : <ContainerSvg />,
	},
];

export default options;
