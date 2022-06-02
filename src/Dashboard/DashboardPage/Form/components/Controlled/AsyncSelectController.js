import React from 'react';
import { Controller } from '@cogoport/front/hooks';
import AsyncSelect from '../AsyncSelect';

const SelectController = ({ itemKey, name, value, control, ...rest }) => (
	<Controller
		key={itemKey || name}
		control={control}
		name={name}
		defaultValue={value}
		rules={rest.rules}
		shouldUnregister={rest.shouldUnregister}
		render={({ field: { onChange, onBlur, value: newValue } }) => (
			<AsyncSelect
				{...rest}
				key={itemKey}
				onChange={(val, obj) => {
					onChange(val, obj);
					if (rest.handleChange) { rest.handleChange(obj, name); }
				}}
				value={newValue || value}
				onBlur={onBlur}
			/>
		)}
	/>
);
export default SelectController;
