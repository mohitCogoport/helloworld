import Axios from 'axios';
import qs from 'qs';
import { formatDateToString } from '@cogoport/front/date';
import { getCookie } from '@cogoport/front/helpers';
import { toast } from '@cogoport/front/components';

const showError = async (message, type = '') => {
	if (typeof window !== 'undefined') {
		if (type === 'warn') {
			toast.warn(message);
		} else {
			toast.error(message);
		}
	}
};

const config = {
	analytics: {
		tokenKey : 'cogo-analytics-token',
		storeKey : '__COGO_ANALYTICS_STORE__',
	},
	public: { options: {} },
};

const request = Axios.create();

request.interceptors.request.use((oldAxiosConfig) => {
	const { scope = 'public', ...axiosConfig } = oldAxiosConfig;
	const { tokenKey, storeKey } = config[scope];
	const token = getCookie(tokenKey, oldAxiosConfig.ctx);
	axiosConfig.timeout = 300000;
	axiosConfig.paramsSerializer = (params) => {
		const paramsStringify = qs.stringify(params, {
			arrayFormat   : 'brackets',
			serializeDate : (date) => formatDateToString(date),
		});
		return paramsStringify;
	};
	switch (scope) {
		case 'analytics':
			axiosConfig.baseURL = 'https://api-matrix2.dev.cogoport.io';
			axiosConfig.headers = { authorizationscope: 'partner' };
			if (token) {
				axiosConfig.headers.authorization = `Bearer: da0e11ed-3875-4857-a50e-5f62b2eb64ed`;
			}
			break;
		case 'public':
		default:
			break;
	}

	return axiosConfig;
});

request.interceptors.response.use(
	(response) => ({ hasError: false, data: response?.data, status: response?.status }),
	(error) => {
		if (error.response) {
			const { status } = error?.response || {};
			if (status === 400 || status === 500) {
				const res = error?.response?.data;
				const keys = Object.keys(res || {});
				const errorObj = {};
				keys?.forEach((key) => {
					errorObj[key] = `${key} ${
						Array.isArray(res[key]) ? (res[key] || []).join(', ') : res[key]
					}`;
				});
				// eslint-disable-next-line prefer-promise-reject-errors
				return Promise.reject({ status, data: errorObj });
			}
			if (error?.response?.status === 401) {
				showError('Authentication failed!');
			} else if (status === 403) {
				const message = error?.response?.data?.base?.[0] || 'You are not authorized to access this feature!!';
				showError(message, 'warn');
			} else {
				showError(
					`The application has encountered an unknown error.
						Our team is looking into this with the utmost urgency.
						Please try again after some time. If the issue persists, please contact us via chat.`,
				);
			}
			return Promise.reject(error);
		}
		return Promise.reject(error);
	},
);

export default request;
