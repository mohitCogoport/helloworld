import styled from '@cogoport/front/styled';

export const SaveDashboardButtonContainer = styled.div`
	width           :100%;
	padding         : 8px 0px;
	box-sizing       : border-box;
	display         : flex;
	justify-content  : flex-end;
	align-items      : center;
	border-radius    : 8px 8px 0 0;

	@media (max-width: 1165px) {
		width           : calc(100% - 16px);
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}
`;
