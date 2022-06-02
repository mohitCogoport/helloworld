import { formatDateToString } from '@cogoport/front/date';

const DATE_PATTERN = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3})Z$/g;

const formatData = (data = '') => {
	if (!data) return '';

	if (isDate(data)) return formatDateToString(data, 'dd MMM yyyy');

	return data;
};

const isDate = (data = '') => RegExp(DATE_PATTERN).test(data);

export default formatData;
