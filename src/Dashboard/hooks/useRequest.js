/* eslint-disable prefer-destructuring */
import { makeUseAxios } from 'axios-hooks';
import { request } from '../helpers';

const useAxios = makeUseAxios({ axios: request, cache: false });


/**
 *
 * @param 		{string} 					[method='get']		HTTP Method for the request
 * @param 		{boolean} 					[auto=false]		Enable auto trigger and disable auto trigger
 * @param 		{'public'|'analytics'} 	[scope='public']	Scope for which config should be applied
 * @returns 	AxiosRequestFunction
 */
const useRequest = (method = 'get', auto = false, scope = 'public') => (url='https://api-matrix2.dev.cogoport.io', ...args) => {
	let body; let options;
	const methodWithBodies = ['post', 'put', 'patch'];
	const methodWithoutBodies = ['get', 'delete', 'head', 'options'];
	if (methodWithBodies.includes(method.toLowerCase())) {
		body = args[0];
		options = args[1];
	} else if (methodWithoutBodies.includes(method.toLowerCase())) {
		options = args[0];
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [{ loading, error, data, response }, trigger] = useAxios({
		url,
		method,
		scope,
		data: body,
		...options,
	}, { manual: !auto });
	return { loading, error, data, response, trigger };
};

export default useRequest;
