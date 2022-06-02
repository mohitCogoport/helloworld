/* eslint-disable no-nested-ternary */
import styled from '@cogoport/front/styled';

export const ChartsContainer = styled.div`
    border-radius: 8px;
    height: ${(props) => (props.gridItemHeight
		? `${props.gridItemHeight - 35}px`
		: (props?.isKpiStatsBoxChart || props?.isTitleChart) ? 'auto' : '300px'
	)};
    padding: 8px;
    overflow-y: hidden;

    &.full {
        width: 100%;
        height: 500px;
    }
`;

export const SubChartContainer = styled.div`
    /* text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
`;
