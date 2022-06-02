import { merge } from '@cogoport/front/utils';

import getAsyncFields from './getAsyncFields';
import getOptionsFromKey from './getOptionsFromKey';

const getOptions = (
	options,
	optionsListKey,
	{ valueKey, labelKey, params = {} },
) => {
	let finalOptions = options || [];
	let finalValueKey = valueKey || 'value';
	let finalLabelKey = labelKey || 'label';

	let getOptionLabel = null;
	let getOptionValue = null;

	if (optionsListKey) {
		const asyncFields = getAsyncFields(optionsListKey);

		if (asyncFields) {
			const {
				defaultParams = {},
				finalValueKey: finalValueKeyAsync,
				finalLabelKey: finalLabelKeyAsync,
				...restAsyncFields
			} = asyncFields;
			const mergedParams = merge({}, defaultParams, params);

			return {
				finalValueKey : valueKey || finalValueKeyAsync,
				finalLabelKey : labelKey || finalLabelKeyAsync,
				isAsync       : true,
				asyncOptions  : {
					...restAsyncFields,
					defaultParams: mergedParams,
				},
			};
		}

		const data = getOptionsFromKey();

		if (data !== null) {
			finalOptions = data.options;
			finalValueKey = valueKey || data.valueKey;
			finalLabelKey = labelKey || data.labelKey;

			getOptionLabel = data.getOptionLabel || (() => labelKey || 'label');
			getOptionValue = data.getOptionValue || (() => valueKey || 'value');
		}
	}

	return {
		finalOptions,
		finalValueKey,
		finalLabelKey,
		getOptionValue,
		getOptionLabel,
		isAsync        : false,
		defaultOptions : {},
	};
};

export default getOptions;
