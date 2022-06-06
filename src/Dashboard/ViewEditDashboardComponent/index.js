import React, { useState } from 'react';
import { Flex } from '@cogoport/front/components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container, MainSection } from './styles';
import GridItem from './GridItem';
import RemoveWidgetModal from './RemoveWidgetModal';
import EmptyState from "../EmptyState"

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

						{widgets.length <= 0 && <EmptyState />}

						{widgets.length > 0 && (
							<ResponsiveGridLayout
								className="layout"
								rowHeight={30}
								layouts={dashboardLayout}
								breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
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
						) }
					</MainSection>
				</Container>
			</Flex>

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
