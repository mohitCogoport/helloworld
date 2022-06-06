import React from 'react';
import { Flex } from '@cogoport/front/components';
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
		<Flex style={{ gap: '8px' }}>
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
