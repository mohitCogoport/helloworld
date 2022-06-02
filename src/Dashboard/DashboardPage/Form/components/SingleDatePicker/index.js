import React from 'react';
import { useController } from '@cogoport/front/hooks';
import { SingleDatePicker } from '@cogoport/front/components/DateTimePicker';

const SingleDatePickerControlled = ({ control, name, ...rest }) => {
	const { field: { ref, ...singleDatePickerProps } } = useController({
		name,
		control,
		rules        : rest.rules,
		defaultValue : rest.defaultValue,
	});

	return (
		<SingleDatePicker
			{...rest}
			{...singleDatePickerProps}
			value={rest.value || singleDatePickerProps.value}
			inputRef={ref}
		/>
	);
};

export default SingleDatePickerControlled;
