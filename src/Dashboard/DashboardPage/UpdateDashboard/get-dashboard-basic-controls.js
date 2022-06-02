const controls = [
	{
		name        : 'name',
		label       : 'Dashboard Name',
		placeholder : 'Enter here...',
		type        : 'text',
		watch       : false,
		span        : 4,
		rules       : { required: 'Field is required' },
	},
	{
		name        : 'description',
		label       : 'Description',
		placeholder : 'Enter here...',
		type        : 'text',
		watch       : false,
		span        : 4,
		rules       : { required: 'Field is required' },
	},
	{
		name           : 'collection_id',
		label          : 'Collection',
		defaultOptions : true,
		caret          : true,
		span           : 4,
		watch          : true,
		scope          : 'analytics',
		type           : 'nestedSelection',
		optionsListKey : 'collections',
		valueKey       : 'id',
		labelKey       : 'name',
		placeholder    : 'Search...',
	},
];

const getDashboardBasicControls = (dashboardData = {}) => {
	if (Object.keys(dashboardData).length === 0) return controls;

	return controls?.map((control) => {
		const { name = '' } = control;

		if (name !== 'collection_id') {
			return { ...control, value: dashboardData?.[name] || undefined };
		}
		return { ...control, previousValue: dashboardData?.analytics_collection_name || null };
	});
};

export default getDashboardBasicControls;
