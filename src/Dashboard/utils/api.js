const SCOPES = { ANALYTICS: 'analytics' };

const { ANALYTICS: SCOPE_ANALYTICS } = SCOPES;

const API = {
	LOGIN_USER: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/login_user',
	},
	LIST_ANALYTICS_QUERY_LOGS: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_analytics_query_logs',
	},

	GET_USER_SESSION: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_user_session',
	},
	DELETE_USER_SESSION: {
		apiMethod : 'delete',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/delete_user_session',
	},
	SETUP_ANALYTICS_DATABASE_CONNECTION: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/setup_analytics_database_connection',
	},
	LIST_ANALYTICS_DATA_SOURCES: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_analytics_data_sources',
	},
	CREATE_ANALYTICS_DATA_SOURCE: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/create_analytics_data_source',
	},
	UPDATE_ANALYTICS_DATA_SOURCE: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/update_analytics_data_source',
	},
	GET_ALL_TABLES_FROM_DATA_SOURCE: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_all_tables_from_data_source',
	},
	LIST_ALL_RECORDS_FROM_TABLE: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_all_records_from_table',
	},
	GET_ANALYTICS_QUERY_RESULT_SET: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_analytics_query_result_set',
	},
	BULK_UPDATE_ANALYTICS_WIDGETS: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/bulk_update_analytics_widgets',
	},
	CREATE_ANALYTICS_WIDGET: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/create_analytics_widget',
	},
	LIST_ANALYTICS_WIDGETS: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_analytics_widgets',
	},
	GET_ANALYTICS_WIDGET: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_analytics_widget',
	},
	UPDATE_ANALYTICS_WIDGET: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/update_analytics_widget',
	},
	CREATE_ANALYTICS_DASHBOARD: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/create_analytics_dashboard',
	},
	LIST_ANALYTICS_DASHBOARDS: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_analytics_dashboards',
	},
	LIST_SHARED_DASHBOARDS: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_shared_dashboards',
	},
	CREATE_ANALYTICS_PUBLIC_DASHBOARD: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/create_analytics_public_dashboard',
	},
	GET_ANALYTICS_DASHBOARD: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_analytics_dashboard',
	},
	LIST_ANALYTICS_COLLECTIONS: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/list_analytics_collections',
	},
	CREATE_ANALYTICS_COLLECTION: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/create_analytics_collection',
	},
	UPDATE_ANALYTICS_COLLECTION: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/update_analytics_collection',
	},
	UPDATE_ANALYTICS_DASHBOARD: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/update_analytics_dashboard',
	},
	UPDATE_ANALYTICS_DASHBOARD_STATUS: {
		apiMethod : 'post',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/update_analytics_dashboard_status',
	},
	GET_ANALYTICS_PUBLIC_DASHBOARD: {
		apiMethod : 'get',
		apiScope  : SCOPE_ANALYTICS,
		apiName   : '/get_analytics_public_dashboard',
	},
};

export default API;
