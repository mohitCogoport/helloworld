const getOptionsFromKey = () => {
	const data = {
		options        : null,
		valueKey       : 'value',
		labelKey       : 'label',
		getOptionLabel : null,
		getOptionValue : null,
	};

	return data.options ? data : null;
};

export default getOptionsFromKey;
