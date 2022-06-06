import styled from '@cogoport/front/styled';

export const FormContainer = styled.div`
    background-color: #ffffff;
    padding: 12px 16px;
    border-radius: 4px;
    width: 100%;
    margin: 0 0 0 8px;

    p{
        text-transform: uppercase;
        color: #393F70;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 16px;
    }

    label{
        color: #393F70;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
    }

    .core-ui-input-root{
        border-color: #CBCFF5;
    }

    .tippy-content{
        height:400px;
        overflow-y:scroll;
        & div{
            & div{
                width:100%;
                & div{
                    overflow:hidden;
                    word-break:break-all;
                }
            }
        }
    }
`;

export const Title = styled.div`

font-weight: 500;
font-size: 14px;
margin-bottom: 8px;
`;

export const SpaceBetween = styled.div`
    margin: 16px 0;
`;
