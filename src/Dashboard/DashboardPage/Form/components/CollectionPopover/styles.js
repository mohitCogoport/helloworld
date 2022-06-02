import styled from '@cogoport/front/styled';

export const Container = styled.div`
    display: flex;
    .popover-button {
        box-shadow: unset;
        width: 100%;
        white-space: nowrap;
        justify-content: left !important;
        border: 1px solid #E0E0E0;
        height: 30px;
        text-transform: none;
        font-weight: 100 !important;
        font-style: inherit !important;
        letter-spacing: 0;
        font-size: 12px;
        text-align: left;

        &:hover {
            box-shadow: unset;
        }
        &:active {
            border: 1px solid #000;
        }
    }

    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after, .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before { 
        display: none;
    }
`;

export const PopoverContainer = styled.div`
    width: 300px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
`;

export const PopoverCard = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
	pointer-events: all;
	align-items: center;
	padding: 8px;
	color: #333;
	font-weight: normal;
    border: 1px solid transparent;

    &:not(:last-child) {
        border-bottom: 1px solid #eee;
    }

    &:hover {
		background: #eee;
		color: rgb(116, 131, 143);
    }
    .card-button {
        border-radius: 50%;
        background-color: #fff;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    direction: row;
    border-bottom: 2px solid #eee;
    overflow: auto;
    padding: 10px 0;

    .close-button {
        position: absolute;
        right: 0.2rem;
        top: 10px;
        border: unset;
        width: 30px;
        height: auto;
        background: #fff;

        &:hover {
            box-shadow: unset;
        }
    }
`;

export const NavigationText = styled.div`
    cursor: pointer;
    font-size: 16px;
    font-weight: ${(props) => (props?.isLast ? 500 : null)};
    opacity: ${(props) => (props?.isLast ? 1 : 0.7)};
    width: 100%;
    white-space: nowrap;

    &:hover {
        color: #034afd;
    }
`;

export const NoData = styled.div`
    align-items: center;
    text-align: center;
    height: 12vh;
    padding-top: 10vh;
    font-size: 15px;
`;

export const ValueText = styled.div`
    display: flex;
    opacity: ${(props) => (props?.isPlaceHolder ? 0.5 : 1)};
`;

export const CollectionValueButton = styled.div`
    border: 1px solid #eee;
    padding: 2px;
    border-radius: 4px;
    background: #eee;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: 'row';
`;

export const RemoveCollection = styled.div`
    display:flex;
    justify-content:center;
    margin-left: 15px;
    border-radius: 4px;
`;
