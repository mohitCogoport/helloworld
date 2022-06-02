import React from 'react';
import {  Flex, Modal, Text } from '@cogoport/front/components';
import Button  from  '../../../Button';

const CancelUpdateDashboardConfirmationModal = ({
	showCancelUpdateConfirmationModal = false,
	setShowCancelUpdateConfirmationModal = () => {},
	setDashboardMode = () => {},
	reloadOnUpdate = true,
	setReloadOnUpdate = () => {},
}) => {
	if (!showCancelUpdateConfirmationModal) return null;

	const handleClickProceed = () => {
		setDashboardMode('view');
		setShowCancelUpdateConfirmationModal(false);
		setReloadOnUpdate(!reloadOnUpdate);
	};

	return (
		<Modal
			show={showCancelUpdateConfirmationModal}
			onClose={() => setShowCancelUpdateConfirmationModal(false)}
			width={350}
			onOuterClick={() => setShowCancelUpdateConfirmationModal(false)}
		>
			<Flex direction="column">
				<Text size={18} bold>
					Confirmation
				</Text>

				<Flex direction="column" margin="16px 0 0 0">
					<Text size={16}>
						Any changes made, will not be updated. Are you sure, want to proceed?
					</Text>

					<Flex justifyContent="flex-end" margin="16px 0 0 0" style={{ gap: '16px' }}>
						<Button
							onClick={() => setShowCancelUpdateConfirmationModal(false)}
							className="secondary sm"
						>
							Cancel
						</Button>

						<Button className="primary sm" onClick={handleClickProceed} size="sm">
							Proceed
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Modal>
	);
};

export default CancelUpdateDashboardConfirmationModal;
