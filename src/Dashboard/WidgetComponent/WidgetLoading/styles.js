import styled from '@cogoport/front/styled';

export const ChartsContainer = styled.div`
    border-radius: 8px;
    height: 300px;
    padding: 8px;
    
    &.full {
        width: 100%;
        height: 500px;
    }
`;

export const CenterLoading = styled.div`
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
