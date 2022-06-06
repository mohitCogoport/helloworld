import React, { useEffect, useMemo, useState } from 'react';
import { Flex, toast } from '@cogoport/front/components';
import { useFormCogo } from '@cogoport/front/hooks';
import CancelUpdateDashboardConfirmationModal from './Components/CancelUpdateDashboardConfirmationModal';
import Form from '../Form';
import ThemeSelector from '../ThemeSelector';
import   useRequest   from '../../hooks/useRequest';
import getDashboardBasicControls from './get-dashboard-basic-controls';
import { FormContainer,Title } from './styles';
import API from '../../utils/api';
import SaveDashboard from "./Components/SaveDashboard"

const UpdateDashboard = ({
	themeType = '',
	setThemeType = () => {},
	dashboardLayout = {},
	dashboardData = {},
	dashboardMode = 'view',
	setDashboardMode = () => {},
	widgetsMappingData = [],
	isDashboardEdited = false,
	setIsDashboardEdited = () => {},
	reloadOnUpdate = false,
	setReloadOnUpdate = () => {},
}) => {
	// const router = useRouter();

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [showCancelUpdateConfirmationModal, setShowCancelUpdateConfirmationModal] = useState(false);

	const {
		apiMethod,
		apiScope,
		apiName,
	} = dashboardMode === 'edit' ? API.UPDATE_ANALYTICS_DASHBOARD : API.CREATE_ANALYTICS_DASHBOARD;
	const saveDashboardAPI = useRequest(apiMethod, false, apiScope)(apiName);

	const controls = useMemo(() => getDashboardBasicControls(dashboardData), [dashboardData]);

	const { fields, handleSubmit, watch, setValues } = useFormCogo(controls);

	useEffect(() => {
		if (dashboardData?.analytics_collection_id) {
			setValues({ collection_id: dashboardData?.analytics_collection_id || null });
		}
	}, []);

	useEffect(() => {
		const subscription = watch(() => {
			if (dashboardMode === 'edit' && !isDashboardEdited) {
				setIsDashboardEdited(true);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	useEffect(() => {
		if (reloadOnUpdate) setReloadOnUpdate(false);
	}, [reloadOnUpdate]);

	const handleClickClose = () => setShowCancelUpdateConfirmationModal(true);

	const handleFormSubmit = async (formData) => {
		if (!formData) return;

		setLoading(true);

		const widgetsInLayout = dashboardLayout?.lg?.map((item) => ({

			analytics_widget_id : item?.i,
			status              : 'active',
			position            : {
				x    : item?.x,
				y    : item?.y,
				w    : item?.w < 6 ? 6 : item?.w,
				h    : item?.h < 8 ? 8 : item?.h,
				minW : 6,
				minH : 8,
			},
		})) || [];

		const removedWidgetsFromDashboard = (widgetsMappingData || [])?.filter(({ id }) => {
			const widgetIds = widgetsInLayout?.map((item) => item?.analytics_widget_id) || [];
			return !widgetIds.includes(id);
		}) || [];
		const removedWidgets = removedWidgetsFromDashboard.map((item) => ({
			analytics_widget_id : item?.id,
			status              : 'inactive',
			position            : { ...(item?.widget_data?.position || {}) },
		})) || [];

		const payload = {
			...formData,
			theme_type               : themeType,
			dashboard_widget_mapping : [
				...(widgetsInLayout || []),
				...(removedWidgets || []),
			],
		};

		if (dashboardData) (payload.id = dashboardData.id);

		try {
			const response = await saveDashboardAPI.trigger({ data: payload });
			const { hasError } = response;

			if (hasError) {
				const message = response?.data?.message || 'Something went wrong...';
				toast.error(message);
			} else {
				const message = `Dashboard ${dashboardData.length ? 'updated' : 'saved'} successfully...`;
				toast.success(message);

				if (dashboardData) {
					setDashboardMode('view');
					setReloadOnUpdate(true);
				} 
				// else {
				// 	router.push({ pathname: ROUTER_PATHNAME.DASHBOARDS });
				// }
			}
		} catch (error) {
			const message = ({ ...error })?.data?.message || 'Something went wrong...';
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};

	const onError = (errs) => setErrors(errs);

	return (
		<>
			<SaveDashboard
				dashboardMode={dashboardMode}
				isDashboardEdited={isDashboardEdited}
				handleClickClose={handleClickClose}
				handleSubmit={handleSubmit}
				handleFormSubmit={handleFormSubmit}
				onError={onError}
				loading={loading}
				dashboardData={dashboardData}
			/>
			<Flex flex={1}>
				<ThemeSelector themeType={themeType} setThemeType={setThemeType} />
				<FormContainer>
					<Title bold size={12} marginBottom={8}>Dashboard Details</Title>
					<Form controls={controls} fields={fields} errors={errors} />
				</FormContainer>
			</Flex>

			<CancelUpdateDashboardConfirmationModal
				showCancelUpdateConfirmationModal={showCancelUpdateConfirmationModal}
				setShowCancelUpdateConfirmationModal={setShowCancelUpdateConfirmationModal}
				setDashboardMode={setDashboardMode}
				reloadOnUpdate={reloadOnUpdate}
				setReloadOnUpdate={setReloadOnUpdate}
			/>
		</>
	);
};

export default UpdateDashboard;
