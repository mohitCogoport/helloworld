import { ResponsiveLine } from '@cogoport/front/charts/line';

const Line = ({
	data,
	axisBottomLabel = 'y',
	axisLeftLabel = 'x',
	themeType = 'purple_orange',
}) => (
	<ResponsiveLine
		data={data}
		curve="natural"
		margin={{ top: 25, right: 100, bottom: 75, left: 75 }}
		xScale={{ type: 'point' }}
		yScale={{
			type    : 'linear',
			min     : 'auto',
			max     : 'auto',
			stacked : false,
			reverse : false,
		}}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient         : 'bottom',
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : -45,
			legend         : axisBottomLabel,
			legendOffset   : 40,
			legendPosition : 'middle',
		}}
		axisLeft={{
			orient         : 'left',
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : 0,
			legend         : axisLeftLabel,
			legendOffset   : -40,
			legendPosition : 'middle',
		}}
		colors={{ scheme: themeType }}
		enableArea={false}
		pointSize={10}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabelYOffset={-12}
		useMesh
		labelTextColor={themeType === 'purple_orange' ? 'white' : 'black'}
		legends={[
			{
				anchor            : 'bottom-right',
				direction         : 'column',
				justify           : false,
				translateX        : 100,
				translateY        : 0,
				itemsSpacing      : 0,
				itemDirection     : 'left-to-right',
				itemWidth         : 80,
				itemHeight        : 20,
				itemOpacity       : 0.75,
				symbolSize        : 12,
				symbolShape       : 'circle',
				symbolBorderColor : 'rgba(0, 0, 0, .5)',
				effects           : [
					{
						on    : 'hover',
						style : {
							itemBackground : 'rgba(0, 0, 0, .03)',
							itemOpacity    : 1,
						},
					},
				],
			},
		]}
	/>
);

export default Line;
