const getModifiedList = (endpoint, list) => list;

const loadOptions = (asyncOptions, finalValueKey, valueProp, setSelectedOption, getList, getList2, paramsOld) => {
	const getAsyncOptions = async (searchString) => {
		let params = { filters: { q: searchString || undefined } };

		if (!searchString && valueProp) {
			params = { filters: { [finalValueKey]: valueProp } };
		}

		const { filters, ...rest } = paramsOld || {};

		const getListMain = getList.trigger({ params: { ...rest, filters: { ...(filters || {}), ...params.filters } } });

		const allPromises = [getListMain];

		if ((asyncOptions.grouped || []).length) {
			const { filters: oldFilters, ...newRest } = asyncOptions?.grouped?.[0]?.defaultParams || {};
			const res2 = getList2.trigger({ params: { ...newRest, filters: { ...(oldFilters || {}), ...params.filters } } });
			allPromises.push(res2);
		}

		const valuesRes = await Promise.all(allPromises);

		let list = [];

		if (allPromises.length < 2) {
			list = getModifiedList(
				asyncOptions.endpoint,
				asyncOptions.endpoint === 'get_fcl_freight_rate'
					? valuesRes[0]?.data
					: valuesRes[0]?.data?.list || [],
			);
		} else {
			list = valuesRes.map((valuesRe, i) => ({
				label   : i === 0 ? asyncOptions.groupedLabel : asyncOptions.grouped[i - 1]?.groupedLabel,
				options : getModifiedList(
					i === 0 ? asyncOptions.endpoint : asyncOptions.grouped[i - 1]?.endpoint,
					valuesRe.data?.list || [],
				),
			}));
		}

		if (!searchString && valueProp) {
			if (allPromises.length < 2) {
				setSelectedOption(list);
			} else {
				setSelectedOption([...list[0].options, ...list[1].options]);
			}
		}

		return list;
	};

	return (inputValue, callback) => {
		setTimeout(async () => {
			callback(await getAsyncOptions(inputValue));
		}, 1000);
	};
};

export default loadOptions;
