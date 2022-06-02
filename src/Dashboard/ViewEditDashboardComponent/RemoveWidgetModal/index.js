import React from 'react';
import { Flex, Modal, Text } from '@cogoport/front/components';
import { Button } from '@cogoport/front/components/admin';

const RemoveWidgetModal = ({
	showRemoveWidgetModal,
	setShowRemoveWidgetModal,
	widgetIdToRemove,
	setWidgetIdToRemove,
	widgets,
	setWidgets,
}) => {
	if (!showRemoveWidgetModal) return null;

	const handleClickCancelWidgetRemove = () => {
		setWidgetIdToRemove(null);
		setShowRemoveWidgetModal(false);
	};

	const handleClickRemoveWidget = () => {
		setWidgets(widgets.filter(({ id }) => id !== widgetIdToRemove));

		setWidgetIdToRemove(null);
		setShowRemoveWidgetModal(false);
	};

	return (
		<Modal
			show={showRemoveWidgetModal}
			onClose={() => setShowRemoveWidgetModal(false)}
			width={350}
			onOuterClick={() => setShowRemoveWidgetModal(false)}
		>
			<Text as="h3" size={18} bold>Remove Widget</Text>

			<Flex direction="column" margin="16px 0 0 0">
				<Text size={16}>
					Are you sure, want to remove this widget?
				</Text>

				<Flex
					justifyContent="flex-end"
					margin="16px 0 0 0"
					style={{ gap: '16px' }}
				>
					<Button
						className="secondary sm"
						onClick={handleClickCancelWidgetRemove}
					>
						Cancel
					</Button>
					<Button
						className="primary sm"
						onClick={handleClickRemoveWidget}
					>
						Remove
					</Button>
				</Flex>
			</Flex>
		</Modal>
	);
};

export default RemoveWidgetModal;
