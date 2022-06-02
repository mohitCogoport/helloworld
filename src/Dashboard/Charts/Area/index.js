import { ResponsiveAreaBump } from '@cogoport/front/charts/bump';

const Area = ({ data, themeType = 'purple_orange' }) => (
	<ResponsiveAreaBump
		data={data}
		margin={{ top: 40, right: 100, bottom: 75, left: 100 }}
		spacing={8}
		colors={{ scheme: themeType || 'purple_orange' }}
		startLabel="id"
		axisTop={{
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : 0,
			legend         : '',
			legendPosition : 'middle',
			legendOffset   : -36,
		}}
		axisBottom={{
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : 0,
			legend         : '',
			legendPosition : 'middle',
			legendOffset   : 32,
		}}
	/>
);

export default Area;
