import React from 'react';
import { Controller } from '@cogoport/front/hooks';
import CollectionPopover from '../CollectionPopover';

const SelectController = ({ previousValue, itemKey, name, value, control, placeholder, ...rest }) => (
	<Controller
		key={itemKey || name}
		control={control}
		name={name}
		defaultValue={value}
		rules={rest.rules}
		shouldUnregister={rest.shouldUnregister}
		render={({ field: { onChange, onBlur, value: newValue } }) => (
			<CollectionPopover
				{...rest}
				placeholder={placeholder}
				key={itemKey}
				onChange={(val, obj) => {
					onChange(val, obj);
					if (rest.handleChange) { rest.handleChange(obj, name); }
				}}
				previousValue={previousValue}
				value={newValue || value}
				onBlur={onBlur}
			/>
		)}
	/>
);
export default SelectController;
