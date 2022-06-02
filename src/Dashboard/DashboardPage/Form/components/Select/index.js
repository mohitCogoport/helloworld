import React from 'react';
import { useController } from '@cogoport/front/hooks';
import { Select as SelectCore } from '@cogoport/front/components';

const Select = ({ control, name, ...rest }) => {
	const { field: { ref, ...selectProps } } = useController({
		name,
		control,
		rules        : rest.rules,
		defaultValue : rest.defaultValue,
	});
	return <SelectCore {...rest} {...selectProps} value={rest.value || selectProps.value} inputRef={ref} />;
};
export default Select;
