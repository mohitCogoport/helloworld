import React, { useState, forwardRef } from 'react';

import { Select as SelectCore } from '@cogoport/front/components';

import { merge } from '@cogoport/front/utils';
import { useRequest } from '../../../../hooks';
import Option from './components/Option';
import getOptions from './utils/getOptions';
import getAsyncOptions from './utils/getAsyncOptions';
import getAutoMenuClose from './utils/getAutoMenuClose';

const Select = (props, ref) => {
	const {
		options,
		optionsListKey,
		name,
		multiple,
		autoCloseMenu,
		width,
		value: valueProp,
		noOptionsMessage,
		customComponents,
		...rest
	} = props;

	const closeMenuOnSelect = getAutoMenuClose(autoCloseMenu, multiple);

	const {
		finalOptions,
		isAsync,
		finalValueKey,
		finalLabelKey,
		defaultOptions,
		isSearchable,
		asyncOptions,
	} = getOptions(options, optionsListKey, { ...rest });

	const [initialLoadOptions, setSelectedOption] = useState([]);

	const params = merge({ ...(rest.params || {}) }, asyncOptions?.defaultParams || {});
	const getList = useRequest('get', false, 'analytics')(`/${asyncOptions?.endpoint}`, { params });
	const getList2 = useRequest('get', false, 'analytics')(`/${asyncOptions?.grouped?.[0]?.endpoint}` || '', { params: asyncOptions?.grouped?.[0]?.defaultParams });

	const reactSelectAsyncProps = () => {
		const loadOptions = getAsyncOptions(asyncOptions, finalValueKey, valueProp, setSelectedOption, getList, getList2, params);

		return {
			loadOptions,
			isSearchable,
			cacheOptions   : true,
			initialLoadOptions,
			defaultOptions : defaultOptions ? true : !!valueProp,
		};
	};

	const reactSelectProps = () => ({ options: finalOptions });

	const finalElementProps = isAsync ? reactSelectAsyncProps() : reactSelectProps();

	const customComponentsAll = {
		...customComponents,
		Option: (optionProps) => (
			<Option {...optionProps} finalLabelKey={finalLabelKey} optionsListKey={optionsListKey} />
		),
	};

	if (rest.ControlComponent) {
		customComponentsAll.Control = rest.ControlComponent;
	}

	return (
		<SelectCore
			ref={ref}
			name={name}
			closeMenuOnSelect={closeMenuOnSelect}
			isAsync={isAsync}
			labelKey={finalLabelKey}
			valueKey={finalValueKey}
			value={valueProp}
			customComponents={customComponentsAll}
			multiple={multiple}
			{...finalElementProps}
			{...rest}
		/>
	);
};

export default forwardRef(Select);
