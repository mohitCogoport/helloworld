import { Skeleton } from '@cogoport/front/components';
import React, { useMemo } from 'react';

const usePreparedColumns = ({ columns, loading }) => {
	const newColums = useMemo(() => {
		if (loading) {
			return columns?.map((col) => ({
				...col,
				accessor: () => (
					<Skeleton
						height={16}
						speed={1}
					>
						<rect x="0" y="0" rx="4" ry="4" width="80" height="16" />
					</Skeleton>

				),
			}));
		}
		return columns;
	}, [loading, columns]);

	return { columns: newColums };
};

export default usePreparedColumns;
