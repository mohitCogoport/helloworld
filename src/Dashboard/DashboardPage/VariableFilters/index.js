import React, { useState } from 'react';
import { Flex } from '@cogoport/front/components';
import { useFormCogo } from '@cogoport/front/hooks';
import Button from '@cogoport/front/components/admin/Button';
import Form from '../Form';

const date_control = {
	type         : 'singleDatePicker',
	watch        : true,
	span         : 4,
	rules        : { required: 'Mandatory' },
	autocomplete : 'off',
};

const text_control = {
	type         : 'text',
	watch        : false,
	span         : 4,
	rules        : { required: 'Mandatory' },
	autocomplete : 'off',
};

const VariableFilters = ({
	queryVariables = [],
	queryVariableValues,
	setQueryVariableValues,
}) => {
	const isApplied = queryVariables?.length > 0;

	const controls = queryVariables?.map((item) => ({
		...(item?.type === 'text' ? text_control : date_control),
		name         : item?.name,
		label        : item?.label,
		defaultValue : item?.default_value,
	}));

	const { fields, handleSubmit, setValues } = useFormCogo(controls);

	const [errors, setErrors] = useState({});

	const handleFormSubmit = async (data) => {
		setQueryVariableValues({ ...queryVariableValues, ...data });
		setErrors({});
	};

	const onError = (errs) => {
		setErrors(errs);
	};

	return (
		isApplied && (
			<Flex flex={1} justifyContent="baseline" alignItems="flex-end">
				<Form controls={controls} fields={fields} errors={errors} />
				<Flex justifyContent="flex-end" margin="8px">
					<Button
						className="secondary sm"
						onClick={() => {
							setValues({ ...controls.reduce((pv, cv) => ({ ...pv, [cv.name]: '' }), {}) });
							setQueryVariableValues({});
						}}
					>
						Reset
					</Button>

					<Button
						className="primary sm"
						onClick={handleSubmit(handleFormSubmit, onError)}
						style={{ marginLeft: '8px' }}
					>
						Apply
					</Button>
				</Flex>
			</Flex>
		)
	);
};

export default VariableFilters;
