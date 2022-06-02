import React from 'react';
import { useController } from '@cogoport/front/hooks';
import { Toggle } from '@cogoport/front/components';

const ToggleControled = ({ control, name, ...rest }) => {
	const { field: { ref, ...toggleProps } } = useController({
		name,
		control,
		rules        : rest.rules,
		defaultValue : rest.defaultValue,
	});
	return <Toggle {...rest} {...toggleProps} value={rest.value || toggleProps.value} inputRef={ref} />;
};
export default ToggleControled;
