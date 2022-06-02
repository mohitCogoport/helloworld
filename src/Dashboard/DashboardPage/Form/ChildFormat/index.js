import React from 'react';
import { useFieldArray } from '@cogoport/front/hooks';
import { Flex } from '@cogoport/front/components';
import Child from './child';
import { AddMore } from './styles';

const ChildFormat = ({ name, control, register, controls = [], error }) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name,
	});

	// const childEmptyValues = controls?.reduce((pv, cv) => ({
	// 	...pv,
	// 	[cv.name]: cv?.value || '',
	// }), {});

	const childEmptyValues = {};
	controls.forEach((controlItem) => {
		childEmptyValues[controlItem.name] = controlItem.value || '';
	});

	return (
		<div className={`form-fieldArray-${name}`}>
			{fields?.map((field, index) => (
				<Child
					field={field}
					index={index}
					register={register}
					control={control}
					controls={controls}
					name={name}
					key={field.id}
					remove={remove}
					error={error?.[index]}
				/>
			))}
			<Flex>
				<AddMore onClick={() => append(childEmptyValues)}>+ Add another</AddMore>
			</Flex>
		</div>
	);
};
export default ChildFormat;
