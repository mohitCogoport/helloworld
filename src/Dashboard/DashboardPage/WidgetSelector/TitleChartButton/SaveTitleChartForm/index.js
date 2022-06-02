import React, { useEffect, useState } from 'react';
import { useFormCogo } from '@cogoport/front/hooks';
import { Flex } from '@cogoport/front/components';
import { Button, toast } from '@cogoport/front/components/admin';
import { useRequest } from '../../../hooks';
import Form from '../../Form';
import API from '../../../utils/api';

const controls = [
	{
		name        : 'title',
		label       : 'Title',
		placeholder : 'Enter here...',
		type        : 'text',
		watch       : false,
		span        : 12,
		rules       : { required: 'Field is required' },
	},
	{
		name        : 'description',
		label       : 'Description',
		placeholder : 'Enter here...',
		type        : 'text',
		watch       : false,
		span        : 12,
		rules       : { required: 'Field is required' },
	},
	{
		name           : 'collection_id',
		label          : 'Collection',
		defaultOptions : true,
		caret          : true,
		span           : 12,
		watch          : true,
		scope          : 'analytics',
		type           : 'nestedSelection',
		optionsListKey : 'collections',
		valueKey       : 'id',
		labelKey       : 'name',
		isClearable    : true,
		placeholder    : 'Choose collection...',
		multiple       : false,
		previousValue  : null,
	},
];

const SaveTitleChartForm = ({
	widgetId = '',
	title = '',
	description = '',
	setShowPopover = 'false',
	widgets,
	setWidgets = () => {},
	dashboardLayout = {},
}) => {
	const {
		apiMethod,
		apiScope,
		apiName,
	} = widgetId ? API.UPDATE_ANALYTICS_WIDGET : API.CREATE_ANALYTICS_WIDGET;
	const createWidgetAPI = useRequest(apiMethod, false, apiScope)(apiName);

	const { fields, handleSubmit, setValue } = useFormCogo(controls);

	useEffect(() => {
		setValue('title', title);
		setValue('description', description);
	}, []);

	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const handleFormSubmit = async (data) => {
		if (!data) return;

		setLoading(true);
		setErrors({});
		const payload = {
			name            : data?.title,
			description     : data?.description,
			query_string    : '',
			query_variables : [],
			collection_id   : data?.collection_id,
			widget_type     : 'title',
			widget_config   : {
				widget_config_data       : { ...data },
				pagination_data_required : false,
			},
		};
		if (widgetId) payload.id = widgetId;

		try {
			const response = await createWidgetAPI.trigger({ data: payload });

			if (!widgetId) {
				const titleWidget = {
					id       : response?.data?.id,
					type     : 'title',
					position : {
						x    : 0,
						y    : 0,
						w    : 9,
						h    : 1,
						minW : 6,
						minH : 8,
						i    : response?.data?.id,
					},
				};

				setWidgets([
					...widgets?.map((widget) => {
						const layoutPosition = dashboardLayout?.lg?.find(({ i }) => i === widget?.id);

						return {
							...widget,
							position: {
								...widget.position,
								...(layoutPosition || {}),
							},
						};
					}),
					{ ...titleWidget },
				]);
			}

			setShowPopover(false);

			toast.success(`Widget ${widgetId ? 'updated' : 'created'} successfully...`);
		} catch (error) {
			toast.error(({ ...error })?.data?.message || 'Something went wrong...');
		} finally {
			setLoading(false);
		}
	};

	const onError = (errs) => {
		setErrors(errs);
	};

	return (
		<Flex direction="column">
			<Form controls={controls} fields={fields} errors={errors} />

			<Flex justifyContent="flex-end">
				<Button
					style={{ margin: 8 }}
					className="primary sm"
					onClick={handleSubmit(handleFormSubmit, onError)}
					disabled={loading}
				>
					{widgetId ? 'Update' : 'Create'} Widget
				</Button>
			</Flex>
		</Flex>
	);
};

export default SaveTitleChartForm;
