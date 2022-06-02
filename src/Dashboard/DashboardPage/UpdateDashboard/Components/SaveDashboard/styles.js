import styled from '@cogoport/front/styled';

export const SaveDashboardButtonContainer = styled.div`
	width           : calc(100% - 110px);
	position        : fixed;
	bottom          :0;
	right:32px;
	left:92px;
	padding         : 24px 36px;
	box-sizing       : border-box;
	display         : flex;
	justify-content  : space-between;
	align-items      : center;
	box-shadow       : 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
	border-radius    : 8px 8px 0 0;
	z-index          : 1;
	background-color : #F5FAFE;
	border          : 1.5px solid #356EFD;

	@media (max-width: 1165px) {
		width           : calc(100% - 16px);
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}
`;
