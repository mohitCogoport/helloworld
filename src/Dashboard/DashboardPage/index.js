import React, { useEffect, useState } from 'react';
import Modal  from '@cogoport/front/components/admin/Modal';
import  Toggle  from '@cogoport/front/components/admin/Toggle';
import { Flex, Text } from '@cogoport/front/components';
import { Container } from './styles';
import CancelUpdateDashboardConfirmationModal from './UpdateDashboard/Components/CancelUpdateDashboardConfirmationModal';
import ViewEditDashboardComponent from '../ViewEditDashboardComponent';
import UpdateDashboard from './UpdateDashboard';
import WidgetSelector from './WidgetSelector';
import VariableFilters from './VariableFilters';
import TitleChartButton from './TitleChartButton';
import API from '../utils/api';
import DashboardLoading from '../loading/dashboard-loading';
import  Button  from './Button';
import { useRequest } from '../hooks';
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"

const DashboardPage = ({id}) => {

	const [dashboardMode, setDashboardMode] = useState('view');
	const [themeType, setThemeType] = useState('');
	const [widgets, setWidgets] = useState([]);
	const [dashboardLayout, setDashboardLayout] = useState({ lg: [] });
	const [showImport, setShowImport] = useState(false);
	const [queryVariableValues, setQueryVariableValues] = useState({});
	const [isDashboardEdited, setIsDashboardEdited] = useState(false);

	const params = { id };
	const { apiMethod, apiScope, apiName } = API.GET_ANALYTICS_DASHBOARD;
	const getDashboardAPI = useRequest(apiMethod, false, apiScope)(apiName, { params });
	const loading = getDashboardAPI?.loading;
	const api_data = getDashboardAPI?.data?.data;
	const dashboard_data = api_data?.data;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const widgetsMappingData = api_data?.mapping_data || [];

	const [reloadOnUpdate, setReloadOnUpdate] = useState(true);
	const [showCancelUpdateConfirmationModal, setShowCancelUpdateConfirmationModal] = useState(false);

	useEffect(() => {
		if (!reloadOnUpdate) return;
		getDashboardAPI.trigger({
			
			
		});
		setIsDashboardEdited(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reloadOnUpdate]);

	console.log('api data ', api_data);

	useEffect(() => {
		if (widgetsMappingData.length === 0) return;

		const newWidgets = widgetsMappingData?.map((widget) => ({
			id       : widget?.id,
			type     : widget?.widget_type,
			position : {
				...(widget?.widget_data?.position || {}),
				i: widget?.id,
			},
		}));

		setThemeType(widgetsMappingData[0]?.widget_data?.theme_type);
		setWidgets([...newWidgets]);
	}, [widgetsMappingData]);

	useEffect(() => {
		const layouts = widgets?.map((widget) => ({
			...widget?.position,
			i: widget?.id,
		}));

		setDashboardLayout({
			...dashboardLayout,
			lg: layouts,
		});
	}, [widgets]);

	useEffect(() => {
		if (!loading && dashboardMode === 'edit' && !isDashboardEdited) {
			setIsDashboardEdited(true);
		}
	}, [widgets, dashboardLayout, themeType]);

	const handletoggle = () => {
		if (dashboardMode === 'view') setDashboardMode('edit');
		else if (isDashboardEdited) setShowCancelUpdateConfirmationModal(true);
		else setDashboardMode('view');
	};

	const handleRefresh = async () => {
		await getDashboardAPI.trigger();
		setIsDashboardEdited(false);
	};



	const query_variables = [];
	widgetsMappingData?.forEach((item) => {
		const itemQv = item?.query_variables || [];
		if (itemQv?.length > 0) {
			itemQv.forEach((qv) => {
				const isNotAlreadyAdded = query_variables?.filter((x) => x?.name === qv?.name).length === 0;
				if (isNotAlreadyAdded) {
					query_variables.push(qv);
				}
			});
		}
	});

	return (
		<Flex direction="column">
			<Container>
				<Flex>
					<Text bold>Dashboard Name</Text>
				</Flex>

				<Flex alignItems="center" style={{ gap: '8px' }}>
					<Toggle
						offLabel={{ label: 'View', value: 'view' }}
						onLabel={{ label: 'Edit', value: 'edit' }}
						value={dashboardMode}
						disabled={loading}
						onChange={() => handletoggle()}
					/>

					<Button
						className="secondary sm"
						disabled={loading}
						onClick={() => handleRefresh()}
					>
						Refresh
					</Button>
				</Flex>
			</Container>

			<CancelUpdateDashboardConfirmationModal
				showCancelUpdateConfirmationModal={showCancelUpdateConfirmationModal}
				setShowCancelUpdateConfirmationModal={setShowCancelUpdateConfirmationModal}
				setDashboardMode={setDashboardMode}
				reloadOnUpdate={reloadOnUpdate}
				setReloadOnUpdate={setReloadOnUpdate}
			/>

			{dashboardMode === 'edit' && (
				<UpdateDashboard
					themeType={themeType}
					setThemeType={setThemeType}
					dashboardData={dashboard_data}
					dashboardLayout={dashboardLayout}
					dashboardMode={dashboardMode}
					setDashboardMode={setDashboardMode}
					widgetsMappingData={widgetsMappingData}
					isDashboardEdited={isDashboardEdited}
					setIsDashboardEdited={setIsDashboardEdited}
					reloadOnUpdate={reloadOnUpdate}
					setReloadOnUpdate={setReloadOnUpdate}
				/>
			)}

			{dashboardMode === 'edit' && (
				<Flex justifyContent="space-between" margin="16px 0">

					{/* dashboard configuration like variable,, reset and apply button, create and add widgets */}
					<Text>Configure Dashboard</Text>

					<Flex style={{ gap: '8px' }}>
						<TitleChartButton
							widgets={widgets}
							setWidgets={setWidgets}
							dashboardLayout={dashboardLayout}
						/>

						<Button className="secondary sm" onClick={() => setShowImport(true)}>
							Add Widgets
						</Button>
					</Flex>
				</Flex>
			)}

			{loading ? (
				<Flex alignItems="center" direction="column">
					<DashboardLoading />
				</Flex>
			) : (
				<>

					<VariableFilters
						queryVariables={query_variables}
						queryVariableValues={queryVariableValues}
						setQueryVariableValues={setQueryVariableValues}
					/>

					<ViewEditDashboardComponent
						widgets={widgets}
						setWidgets={setWidgets}
						themeType={themeType}
						dashboardMode={dashboardMode}
						dashboardLayout={dashboardLayout}
						setDashboardLayout={setDashboardLayout}
						queryVariableValues={queryVariableValues}
					/>
				</>
			) }

			{showImport && (
				<Modal
					show={showImport}
					className="primary lg"
					onClose={() => setShowImport(false)}
					width={500}
					onOuterClick={() => setShowImport(false)}
				>
					<WidgetSelector
						widgetsMappingData={widgetsMappingData}
						setShowImport={setShowImport}
						widgets={widgets}
						setWidgets={setWidgets}
					/>
				</Modal>
			)}
		</Flex>
	);
};

export default DashboardPage;
