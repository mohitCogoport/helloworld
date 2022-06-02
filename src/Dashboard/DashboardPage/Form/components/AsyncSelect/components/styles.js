import styled from '@cogoport/front/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Main = styled.div`
	flex-grow: 1;
	max-width: calc(100% - 40px);
`;

export const Title = styled.div`
	font-size: 14px;
	line-height: 22px;
	color: #333333;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;

export const Sub = styled.div`
	font-size: 12px;
	line-height: 14px;
	color: #828282;
	margin-top: 3px;
`;
