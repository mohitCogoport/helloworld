import { Flex, Text } from '@cogoport/front/components';
import { Circle, CircleMask, GaugeHolder, GaugeCopy } from './styles';

const GaugeWidgetLoading = () => (
	<Flex width="100%" direction="column" style={{ gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
		<GaugeHolder>
			<CircleMask>
				<Circle />
			</CircleMask>
			<GaugeCopy style={{ transform: `translate(-50%, 65%) rotate(${30 * 1.8}deg)` }} />
		</GaugeHolder>
		<Text marginTop={20} marginLeft={30} size={12} color="#333333">Fetching data...</Text>
	</Flex>
);

export default GaugeWidgetLoading;
