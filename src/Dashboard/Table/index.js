import React, { memo } from 'react';
import { Flex } from '@cogoport/front/components';
import { StyledTable } from './styles';
import Pagination from './Pagination';
import usePreparedColumns from './usePreparedColumns';
import usePreparedData from './usePreparedData';

const TableContainer = ({
	width = 'auto',
	loading = false,
	showPaginationOnLessData = false,
	columns: propColumns = [],
	rows: propData = [],
	showPagination = true,
	paginationData = {},
	setParams = () => { },
}) => {
	const { columns } = usePreparedColumns({ loading, columns: propColumns });
	const { data } = usePreparedData({ loading, data: propData });

	return (
		<Flex
			height="calc(100% - 22px)"
			display="block"
			style={{ width, overflow: 'auto', position: 'relative' }}
		>
			<Pagination
				showPaginationOnLessData={showPaginationOnLessData}
				showPagination={showPagination}
				paginationData={paginationData}
				setParams={setParams}
				dataCount={data.length}
			/>

			<StyledTable style={{ height: '100%', margin: 0 }} loading={loading} columns={columns} data={data} />
		</Flex>
	);
};

export default memo(TableContainer);
