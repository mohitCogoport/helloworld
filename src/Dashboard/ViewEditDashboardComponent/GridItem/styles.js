import styled from '@cogoport/front/styled';
import { Button } from '@cogoport/front/components/admin';

export const WidgetContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:100%;

    & .md{
        padding:0 !important;
    }
`;

export const CloseButton = styled(Button)`
    z-index: 999;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    box-shadow: 0px 2px 15px rgba(60, 67, 83, 0.25);
    border: none;
    color: #7A5EF3;
    font-weight: 900;
    font-size: 12px;

`;
