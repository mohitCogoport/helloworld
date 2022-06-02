import { ResponsivePie } from '@cogoport/front/charts/pie';

const Pie = ({ data, themeType = 'purple_orange' }) => (
	<ResponsivePie
		data={data}
		margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
		innerRadius={0}
		padAngle={0.7}
		cornerRadius={3}
		activeOuterRadiusOffset={8}
		borderWidth={1}
		borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
		arcLinkLabelsSkipAngle={0}
		arcLinkLabelsTextColor="#333333"
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: 'color' }}
		arcLabelsSkipAngle={0}
		arcLabelsTextColor={themeType === 'purple_orange' ? '#ffffff' : '#000000'}
		colors={{ scheme: themeType || 'purple_orange' }}
	/>
);

export default Pie;
