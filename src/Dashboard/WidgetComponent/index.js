import React, { useState } from 'react';
import { Flex } from '@cogoport/front/components';
import { useRequest } from '../hooks';
import { NoRecordContainer } from './styles';
import  NoRecordsFound from '../assets/icons/no-records.svg';
import WidgetToRender from './WidgetToRender';
import WidgetLoading from './WidgetLoading';
import defaultPaginationParams from '../utils/defaultPaginationParams';
import API from '../utils/api';

const WidgetComponent = ({
	widget_id,
	widget_type,
	themeType,
	gridItemHeight,
	query_variable_values = {},
}) => {
	const [params, setParams] = useState({
		...defaultPaginationParams,
		id: widget_id,
	});

	const { apiMethod, apiScope, apiName } = API.GET_ANALYTICS_WIDGET;
	const getWidgetAPI = useRequest(apiMethod, true, apiScope)(apiName, { params: { ...params, query_variable_values } });

	const loading = getWidgetAPI?.loading;
	const widgetData = getWidgetAPI?.data?.data;

	const paginationData = {
		page        : widgetData?.pagination_data?.page || 0,
		page_limit  : widgetData?.pagination_data?.page_limit || 0,
		total       : widgetData?.pagination_data?.total || 0,
		total_count : widgetData?.pagination_data?.total_count || 0,
	};

	if (loading) {
		return (
			<Flex style={{ minHeight: '30vh' }}>
				<WidgetLoading widget_type={widget_type} />
			</Flex>
		);
	}

	if (!widgetData) {
		if (widget_type !== 'title' && !widgetData?.query_data) {
			return (
				<Flex style={{ minHeight: '30vh' }}>
					<NoRecordContainer>
						<NoRecordsFound style={{ width: '100%', height: '100%' }} />
					</NoRecordContainer>
				</Flex>
			);
		}
	}

	return (
		<WidgetToRender
			widget_type={widget_type}
			widgetData={widgetData}
			themeType={themeType}
			showPagination
			paginationData={paginationData}
			setParams={setParams}
			gridItemHeight={gridItemHeight}
		/>
	);
};

export default WidgetComponent;
