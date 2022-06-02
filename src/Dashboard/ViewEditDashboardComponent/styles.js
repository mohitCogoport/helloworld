import styled from '@cogoport/front/styled';

export const GridContainer = styled.div`
    border: 1px solid rgb(224, 224, 224);
    border-radius: 8px;
    height: 100%;
    cursor: ${(props) => (props.isEditable ? 'grab' : 'auto')};

    &:active {
        cursor: ${(props) => (props.isEditable ? 'grabbing' : 'auto')};
    }
`;

export const ChartContainer = styled.div`
    border: 1px solid rgb(224, 224, 224);
    border-radius: 8px;
    cursor: ${(props) => (props.isEditable ? 'grab' : 'auto')};
    width: 100%;
    height: 200px;
    margin: 8px 0;

    &:active {
        cursor: ${(props) => (props.isEditable ? 'grabbing' : 'auto')};
    }
`;

export const MainSection = styled.div`
	width: 100%;
	padding: 8px 0;
`;

export const RightSection = styled.div`
	width: 350px;
	padding: 8px;
    border: 1px solid rgb(224, 224, 224);
    margin-top: 16px;
    border-radius: 8px;
    height: calc(100vh - 100px);
    overflow-y: scroll;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
    background-color: #ffffff;
    border-radius: 8px;
`;
