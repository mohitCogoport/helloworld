import React, { useState } from 'react';
import { Text } from '@cogoport/front/components';
import Modal  from '@cogoport/front/components/admin/Modal';
import SaveTitleChartForm from './SaveTitleChartForm';
import Button from '../Button';

const TitleChartButton = ({
	widgetId = null,
	title = '',
	description = '',
	widgets = {},
	setWidgets = () => {},
	dashboardLayout = {},
	listWidgetsAPI = {},
	params = {},
}) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>

			<Button onClick={() => setShowModal(!showModal)} className="secondary sm">
				Create Title Widget
			</Button>

			{showModal && (
				<Modal
					show={showModal}
					className="primary sm"
					onClose={() => setShowModal(false)}
					onOuterClick={() => setShowModal(false)}
					styles={{ dialog: { overflow: 'visible' } }}
				>
					<Text>Create Title Widget</Text>
					<SaveTitleChartForm
						widgetId={widgetId}
						title={title}
						description={description}
						setShowPopover={setShowModal}
						widgets={widgets}
						setWidgets={setWidgets}
						dashboardLayout={dashboardLayout}
						listWidgetsAPI={listWidgetsAPI}
						params={params}
					/>
				</Modal>
			)}
		</>
	);
};

export default TitleChartButton;
