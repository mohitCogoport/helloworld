import React from 'react';
import { Flex, Text } from '@cogoport/front/components';
import  Button  from '../../../Button';

import { SaveDashboardButtonContainer } from './styles';

const SaveDashboardButton = ({
	dashboardMode = 'view',
	isDashboardEdited = 'false',
	// handleClickClose = () => {},
	handleSubmit = () => {},
	handleFormSubmit = () => {},
	onError = () => {},
	loading = 'false',
}) => (
	<SaveDashboardButtonContainer>
		{/* <Flex>
			{
				dashboardMode === 'edit'
					? (
						<Text size={14}>
							In case of any modifications on the dashboards, request you to please click on update dashboard button.
						</Text>
					)
					: null
			}

		</Flex> */}

		<Flex style={{ gap: '8px' }}>
			{/* {
				dashboardMode === 'edit'
					? (
						<Button
							className="primary sm"
							onClick={handleClickClose}
						>
							Cancel
						</Button>
					)
					: null
			} */}

			<Button
				className="primary sm"
				onClick={handleSubmit(handleFormSubmit, onError)}
				disabled={dashboardMode === 'edit' && (loading || !isDashboardEdited)}
			>
				{dashboardMode === 'edit' ? 'Update' : 'Create'} Dashboard
			</Button>
		</Flex>
	</SaveDashboardButtonContainer>
);

export default SaveDashboardButton;
