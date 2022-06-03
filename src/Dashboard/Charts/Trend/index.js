import { Flex, Text } from '@cogoport/front/components';
import TrendBlackSvg from '../../assets/charts/trend-black.svg';
import IcUpSvg from './ic-up.svg';
import IcDownSvg from './ic-down.svg';

const Trend = ({ data, themeType = 'purple_orange' }) => {
	const newValue = +data?.chartData?.[1]?.value || 0;
	const oldValue = +data?.chartData?.[0]?.value || 0;

	let percentage = `${((newValue - oldValue) / oldValue) * 100}`;

	const isPercentageDownwards = percentage[0] === '-';

	if (isPercentageDownwards) {
		percentage = percentage.replace('-', '');
	}

	return (
		<Flex direction="column" alignItems="center" width="100%" style={{ gap: '8px' }}>
			<TrendBlackSvg width={24} height={24} />

			<Flex direction="column" alignItems="center">
				<Text size={24} bold>{newValue}</Text>
				<Text size={12}>{data?.label}</Text>
			</Flex>

			<Flex alignItems="center" style={{ gap: '4px' }}>
				{/* {
					isPercentageDownwards
						? <IcDownSvg width={20} height={20} />
						: <IcUpSvg width={20} height={20} />
				} */}

				<Text as="span" size={18} style={{ color: 'rgb(116, 131, 143)' }}>•</Text>

				<Text size={12} style={{ color: 'rgb(116, 131, 143)' }}>
					{(+percentage || 0).toFixed(2)}% {isPercentageDownwards ? 'down' : 'up'} from last timeline
				</Text>
			</Flex>
		</Flex>
	);
};

export default Trend;
