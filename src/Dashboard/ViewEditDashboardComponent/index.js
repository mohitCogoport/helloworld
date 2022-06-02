import React, { useState } from 'react';
import { Flex } from '@cogoport/front/components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container, MainSection } from './styles';
import GridItem from './GridItem';
import RemoveWidgetModal from './RemoveWidgetModal';

const ResponsiveGridLayout = WidthProvider(Responsive);

const ViewEditDashboardComponent = ({
	widgets = [],
	setWidgets = () => {},
	themeType,
	dashboardMode = 'view',
	dashboardLayout = {},
	setDashboardLayout = () => {},
	queryVariableValues = {},
}) => {
	const [showRemoveWidgetModal, setShowRemoveWidgetModal] = useState(false);
	const [widgetIdToRemove, setWidgetIdToRemove] = useState(null);

	const isEditable = dashboardMode !== 'view';

	const { layout_props } = widgets.reduce((pv, cv) => ({
		...pv,
		layout_props: {
			...pv.layout_props,
			[cv.id]: {
				widget_id   : cv?.id,
				widget_type : cv?.type,
			},
		},
	}), { layout_props: {} });

	const removeChart = (widgetId) => {
		setWidgetIdToRemove(widgetId);
		setShowRemoveWidgetModal(true);
	};

	const onLayoutChange = (layouts) => {
		setDashboardLayout({
			...dashboardLayout,
			lg: layouts,
		});
	};

	return (
		<>
			<Flex direction="column" style={{ paddingBottom: isEditable ? '88px' : '8px' }}>
				<Container>
					<MainSection>
						{/* grid layout for showing all the widget in the dashboard */}
						<ResponsiveGridLayout
							className="layout"
							rowHeight={30}
							layouts={dashboardLayout}
							cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
							onLayoutChange={onLayoutChange}
							isDroppable
							measureBeforeMount={false}
							isDraggable={isEditable}
							isResizable={isEditable}
							isBounded
						>
							{
								dashboardLayout?.lg?.map((layout) => (
									<div key={layout?.i}>
										<GridItem
											layout={layout}
											isEditable={isEditable}
											widgets={widgets}
											removeChart={removeChart}
											layout_props={layout_props}
											themeType={themeType}
											queryVariableValues={queryVariableValues}
										/>
									</div>
								))
							}
						</ResponsiveGridLayout>
					</MainSection>
				</Container>
			</Flex>

			{/* for removing a widgets from a dashboard */}
			<RemoveWidgetModal
				showRemoveWidgetModal={showRemoveWidgetModal}
				setShowRemoveWidgetModal={setShowRemoveWidgetModal}
				widgetIdToRemove={widgetIdToRemove}
				setWidgetIdToRemove={setWidgetIdToRemove}
				widgets={widgets}
				setWidgets={setWidgets}
			/>
		</>
	);
};

export default ViewEditDashboardComponent;
