const getAsyncFields = (key) => {
	if (key === 'collections') {
		return {
			finalValueKey  : 'id',
			finalLabelKey  : 'name',
			endpoint       : 'list_analytics_collections',
			defaultParams  : {},
			defaultOptions : true,
			isSearchable   : true,
		};
	}

	return null;
};

export default getAsyncFields;
