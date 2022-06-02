import styled from '@cogoport/front/styled';
import { Table } from '@cogoport/front/components';

const StyledTable = styled(Table)`
	background-color: #ffffff;
	border-radius: 5px;
	overflow: auto;
	
	.ui-table {
		white-space: nowrap;
		.ui-table-head-cell {
			/* background-color: #333333 !important; */
			min-width: 190px;
			/* color: white; */
			
		}
		.ui-table-body-cell {
			background-color: #ffffff !important;
			background: #ffffff !important;
            min-width: 190px;
		}
		.ui-table-body-row:hover {
			.ui-table-body-cell {
				background-color: #F5FAFE !important;
				background: #F5FAFE !important;
			}
		}
		.selected {
			.ui-table-body-cell {
				background-color: #F5FAFE !important;
				background: #F5FAFE !important;
			}
		}
	}
`;

export { StyledTable };
