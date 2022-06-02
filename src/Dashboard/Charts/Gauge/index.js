/* eslint-disable react/button-has-type */
import { Flex } from '@cogoport/front/components';
import { useEffect, useState } from 'react';
import { Circle, CircleInner, CircleMask, GaugeHolder, Percentage, GaugeCopy } from './styles';

const Gauge = ({ data, themeType = 'purple_orange' }) => {
	const [gaugeData, setGaugeData] = useState({
		value         : 0,
		percentage    : 0,
		diameterValue : 0,
	});

	useEffect(() => {
		const value = data?.chartData?.[0]?.value || 0;

		let percentage = (value * 100).toFixed(2);
		if (percentage > 100) percentage = 100;

		setGaugeData({
			...gaugeData,
			value,
			percentage,
			diameterValue: percentage * 1.8 - 45,
		});
	}, []);

	return (
		<Flex width="100%" style={{ gap: '8px', justifyContent: 'center' }}>
			<GaugeHolder>
				<CircleMask themeType={themeType}>
					<Circle themeType={themeType}>
						<CircleInner themeType={themeType} style={{ transform: `rotate(${gaugeData?.diameterValue}deg)` }} />
					</Circle>
				</CircleMask>
				<Percentage themeType={themeType}>
					{gaugeData?.percentage} %
				</Percentage>
				<GaugeCopy themeType={themeType} style={{ transform: `translate(-50%, -50%) rotate(${gaugeData?.percentage * 1.8}deg)` }} />
			</GaugeHolder>
		</Flex>
	);
};

export default Gauge;
