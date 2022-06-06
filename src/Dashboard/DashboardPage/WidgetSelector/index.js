import React, { useState, useEffect } from 'react';
import { Flex,  Text, Checkbox } from '@cogoport/front/components';
import  Button  from '../Button';
import { startCase } from '@cogoport/front/utils';
import { useRequest } from '../../hooks';
import API from '../../utils/api';
import TableContainer from '../../Table';
import { TableBodyContainer } from './styles';
import defaultPaginationParams from '../../utils/defaultPaginationParams';
import Pagination from '../../Table/Pagination';

const WidgetSelector = ({
	widgetsMappingData,
	setShowImport,
	widgets,
	setWidgets,
}) => {
	const [params, setParams] = useState({ defaultPaginationParams, page_limit: 10, collection_data_required: true, filters: { q: '' } });

	const { apiMethod, apiScope, apiName } = API.LIST_ANALYTICS_WIDGETS;
	const listWidgetsAPI = useRequest(apiMethod, true, apiScope)(apiName, { params });

	const loading = listWidgetsAPI?.loading;
	const data = listWidgetsAPI?.data?.list || [];
	const filteredData = data.filter((widgetData) => !widgets.some(({ id }) => id === widgetData?.id));

	useEffect(() => {
		listWidgetsAPI.trigger({ payload: { ...params } });
	}, [params]);
	const [selectedWidgets, setSelectedWidgets] = useState([]);
	const tableFormattedColumns = [
		{
			Header   : '#',
			accessor : (item) => {
				const isChecked = selectedWidgets?.filter((wid) => wid?.id === item?.id)?.length > 0;
				return (
					<Checkbox
						checked={isChecked}
						onChange={() => handleChangeCheckboxToggle(item)}
					/>
				);
			},
			key: 'check',
		},
		{
			Header   : 'Name',
			accessor : 'name',
			key      : 'name',
		},
		{
			Header   : 'Type',
			accessor : (item) => startCase(item?.widget_type),
			key      : 'widget_type',
		},
		{
			Header   : 'Collection',
			accessor : (item) => startCase(item?.analytics_collections?.[0]?.name),
			key      : 'collection',
		},
		{
			Header   : 'Status',
			accessor : (item) => startCase(item?.status),
			key      : 'status',
		},

	];

	const paginationData = {
		page        : listWidgetsAPI?.data?.page || 0,
		page_limit  : listWidgetsAPI?.data?.page_limit || 0,
		total       : listWidgetsAPI?.data?.total || 0,
		total_count : listWidgetsAPI?.data?.total_count || 0,
	};

	const handleChangeCheckboxToggle = (item) => {
		const is_selected = selectedWidgets?.filter((wid) => wid?.id === item?.id)?.length > 0;

		if (is_selected) {
			const remove_selected = selectedWidgets?.filter((wid) => wid?.id !== item?.id);
			setSelectedWidgets(remove_selected);
		}

		if (!is_selected) {
			setSelectedWidgets([
				...selectedWidgets,
				{
					id          : item?.id,
					widget_type : item?.widget_type,
					status      : 'active',
					position    : {
						x    : 0,
						y    : 0,
						w    : 6,
						h    : 8,
						minW : 6,
						minH : 8,
					},
					collection_id   : item?.collection_id,
					collection_name : item?.collection_name,
					data_source_id  : item?.data_source_id,
					description     : item?.description,
					name            : item?.name,
					query_string    : item?.query_string,
					query_variables : item?.query_variables,
				},
			]);
		}
	};

	const handleClickImportWidgets = () => {
		const chartDefaultWidth = {
			pie           : 3,
			donut         : 3,
			kpi_stats_box : 4,
		};

		setWidgets([
			...widgets,
			...selectedWidgets.reduce((pv, cv) => {
				const widget = widgetsMappingData.find(({ analytics_widget_id: id }) => id === cv.id);

				const widgetType = (cv?.widget_type || '').toLowerCase();

				let position = {
					// w : widgetType in chartDefaultWidth ? chartDefaultWidth[widgetType] : 9,

					w    : 6,
					h    : 8,
					x    : widgets.length % 2 === 0 ? 0 : 7,
					y    : 0,
					minW : 6,
					minH : 8,
					i    : cv?.id,
				};

				if (widget) {
					position = {
						...(widget?.widget_data?.[0]?.position || position),
						i: cv?.id,
					};
				}

				return [
					...pv,
					{
						id   : cv?.id,
						type : cv?.widget_type,
						position,
					},
				];
			}, []),
		]);

		setShowImport(false);
	};

	return (
		<Flex direction="column">
			<Text as="h3" size={18} bold>Add Widgets</Text>

			{
				loading
					?	(
						<TableContainer
							height="300px"
							loading={loading}
							columns={[{ Header: '#', accessor: '', key: '' }]}
							rows={[]}
							showPagination={false}
						/>
					)
					:					(
						<TableBodyContainer>
							<Pagination
								showPagination
								showPaginationOnLessData
								paginationData={paginationData}
								setParams={setParams}
								dataCount={data.length || 0}
							/>
							<TableContainer
								height="400px"
								loading={loading}
								columns={tableFormattedColumns}
								rows={filteredData}
								showPagination={false}
							/>
						</TableBodyContainer>
					)

			}

			<Flex margin="8px 0" justifyContent="flex-end">
				<Button
					className="primary sm"
					onClick={handleClickImportWidgets}
					disabled={!selectedWidgets.length}
				>
					Save
				</Button>
			</Flex>
		</Flex>
	);
};

export default WidgetSelector;
