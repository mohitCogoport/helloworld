import { useMemo } from 'react';

const usePreparedData = ({ loading, data }) => {
	const newData = useMemo(() => {
		if (loading) {
			return new Array(3).fill({});
		}
		return data;
	}, [data, loading]);

	return { data: newData };
};

export default usePreparedData;
