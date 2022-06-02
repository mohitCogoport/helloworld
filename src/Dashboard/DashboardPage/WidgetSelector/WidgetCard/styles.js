import styled from '@cogoport/front/styled';

export const Container = styled.div`
    border: 1px solid rgb(224, 224, 224);
    padding: 8px;
    border-radius: 4px;
    margin: 8px 0;

    &.selected {
        background: #F5FAFE;
        border: 1px solid #356EFD;
    }
`;

export const TagDiv = styled.div`
    & .core-ui-tag-root{
        width: fit-content;
        background: #DCE1FF;
        border: none;
    }
`;
