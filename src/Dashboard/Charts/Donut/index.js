import { ResponsivePie } from '@cogoport/front/charts/pie';

const Donut = ({ data, themeType = 'purple_orange' }) => (
	<ResponsivePie
		data={data}
		margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
		innerRadius={0.5}
		padAngle={0.7}
		cornerRadius={3}
		activeOuterRadiusOffset={8}
		borderWidth={1}
		borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
		arcLinkLabelsSkipAngle={10}
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: 'color' }}
		arcLabelsSkipAngle={10}
		colors={{ scheme: themeType || 'purple_orange' }}
		arcLabelsTextColor={themeType === 'purple_orange' ? '#ffffff' : '#000000'}
	/>
);

export default Donut;
