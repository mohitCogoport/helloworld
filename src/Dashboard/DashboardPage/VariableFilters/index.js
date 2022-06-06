import React, { useState } from 'react';
import { Flex,toast } from '@cogoport/front/components';
import { useFormCogo } from '@cogoport/front/hooks';
import Button from '../Button';
import Form from '../Form';
import API from '../../utils/api';
import { useRequest } from '../../hooks';

const date_control = {
	type         : 'singleDatePicker',
	watch        : true,
	span         : 3,
	autocomplete : 'off',
};

const text_control = {
	type         : 'text',
	watch        : false,
	span         : 3,
	autocomplete : 'off',
};

const VariableFilters = ({
	queryVariables = [],
	queryVariableValues,
	setQueryVariableValues,
	dashboard_id = '',
}) => {
	const isApplied = queryVariables?.length > 0;
	const values = {};
	const controls = queryVariables?.map((item) => {
		item.widgetId.forEach((id) => {
			values[`${item?.name}/${id}`] = item?.default_value || '';
		});
		return {
			...(item?.type === 'text' ? text_control : date_control),
			name  : `${item?.name}/${item.widgetId[0]}`,
			label : item?.label,
			value : item?.default_value || '',
			rules : { required: item?.is_required === 'true' && 'Required' },
		};
	});

	const { fields, handleSubmit, setValues } = useFormCogo(controls);
	const [errors, setErrors] = useState({});
	const { apiMethod, apiScope, apiName } = API.BULK_UPDATE_ANALYTICS_WIDGETS;

	const refactorPayload = (query_variable_values = {}) => {
		const payload = [];
		let uniqueIds = [];

		Object.keys(query_variable_values).forEach((key) => {
			const nameKey = key.split('/')[0];

			Object.keys(values).forEach((valKey) => {
				if (valKey.startsWith(nameKey)) {
					values[valKey] = query_variable_values[key];
				}
			});
		});

		Object.keys(values).forEach((key) => {
			const widgetID = key.split('/')[1];
			const nameKey = key.split('/')[0];

			const obj = { [nameKey]: values[key] };

			const index = uniqueIds.indexOf(widgetID);
			if (index > -1) {
				payload[index].query_variable_values[nameKey] = values[key];
			} else {
				if (widgetID) {
					const val = {
						id                    : widgetID,
						query_variable_values : obj,

					};
					payload.push(val);
				}
				uniqueIds = [...uniqueIds, widgetID];
			}
		});
		return payload;
	};

	const bulkUpdateWidgetAPI = useRequest(apiMethod, true, apiScope)(apiName);

	const bulkUpdate = async (payload) => {
		await bulkUpdateWidgetAPI.trigger({ params: { widgets: payload } });
	};

	const onSubmit = async (data) => {
		toast.success('Variable Filters Applied');
		const payload = refactorPayload({ ...queryVariableValues, ...data });

		const newData = { };

		Object.keys(data).forEach((keys) => {
			const nameKey = keys.split('/')[0];
			newData[nameKey] = data[keys];
		});
		if (dashboard_id !== '' || dashboard_id !== undefined) {
			await bulkUpdate(payload);
		}
		setQueryVariableValues({ ...queryVariableValues, ...newData });
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
						onClick={handleSubmit(onSubmit, onError)}
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
