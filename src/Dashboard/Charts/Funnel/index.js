import { ResponsiveFunnel } from '@cogoport/front/charts/funnel';

const Funnel = ({ data, direction = 'horizontal', themeType = 'purple_orange' }) => (
	<ResponsiveFunnel
		data={data}
		margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
		valueFormat=">-.4s"
		colors={{ scheme: themeType }}
		borderWidth={20}
		currentPartSizeExtension={10}
		currentBorderWidth={40}
		motionConfig="wobbly"
		direction={direction}
		enableBeforeSeparators={false}
		enableAfterSeparators={false}
		labelColor={themeType === 'purple_orange' ? 'white' : 'black'}
	/>
);

export default Funnel;
