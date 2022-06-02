import React from 'react';
import { useController } from '@cogoport/front/hooks';
import Switch from '@cogoport/front/components/Switch';

const SwitchControled = ({ control, name, ...rest }) => {
	const { field: { ref, ...switchProps } } = useController({
		name,
		control,
		rules        : rest.rules,
		defaultValue : rest.defaultValue,
	});
	return <Switch {...rest} {...switchProps} value={rest.value || switchProps.value} inputRef={ref} />;
};
export default SwitchControled;
