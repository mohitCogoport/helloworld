import { ResponsiveBar } from '@cogoport/front/charts/bar';

const Bar = ({ data, layout, valueKeys, indexByKey, xAxisLabel, yAxisLabel, groupMode, themeType = 'purple_orange' }) => (
	<ResponsiveBar
		data={data}
		keys={valueKeys || []}
		indexBy={indexByKey || ''}
		margin={{ top: 50, right: 130, bottom: 75, left: 60 }}
		padding={0.3}
		valueScale={{ type: 'linear' }}
		indexScale={{ type: 'band', round: true }}
		valueFormat=" >-0.3s"
		colors={{ scheme: themeType || 'purple_orange' }}
		groupMode={groupMode || 'grouped'}
		layout={layout || 'vertical'}
		borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : -45,
			legend         : `${xAxisLabel || 'x-axis'}`,
			legendPosition : 'middle',
			legendOffset   : 32,
		}}
		axisLeft={{
			tickSize       : 5,
			tickPadding    : 5,
			tickRotation   : 0,
			legend         : `${yAxisLabel || 'y-axis'}`,
			legendPosition : 'middle',
			legendOffset   : -40,
		}}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor={themeType === 'purple_orange' ? '#ffffff' : '#000000'}
		legends={[
			{
				dataFrom      : 'keys',
				anchor        : 'bottom-right',
				direction     : 'column',
				justify       : false,
				translateX    : 120,
				translateY    : 0,
				itemsSpacing  : 2,
				itemWidth     : 100,
				itemHeight    : 20,
				itemDirection : 'left-to-right',
				itemOpacity   : 0.85,
				symbolSize    : 20,
				effects       : [
					{
						on    : 'hover',
						style : { itemOpacity: 1 },
					},
				],
			},
		]}
	/>
);

export default Bar;
