import styled from '@cogoport/front/styled';
import { Flex, Table as CogoTable } from '@cogoport/front/components';

import { themes as themeTypes } from '../Gauge/styles';

const TableChart = ({ data = [], themeType = 'purple_orange' }) => {
	const columns = Object.keys(data?.[0] || {}).map((columnName) => ({
		Header   : columnName,
		accessor : columnName,
		key      : columnName,
	})) || [];

	return (
		<Flex
			display="block"
			style={{
				background : '#fff',
				overflowY  : 'scroll',
				height     : '100%',
			}}
		>
			<Table themeType={themeType} columns={columns} data={data} />
		</Flex>
	);
};

const Table = styled(CogoTable)`
    background-color: #ffffff;
	overflow-x: scroll;
	height: unset;

	.ui-table {
		white-space: nowrap;

		.ui-table-head-cell {
			min-width: 190px;
            background: ${(props) => (props.themeType in themeTypes ? themeTypes[props.themeType].active : '#ffffff')};
            color: white;
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
		.ui-table-body-row {}
	}
`;

export default TableChart;
