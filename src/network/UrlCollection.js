export const PARENT_URL = {
    // live

    //stage
     PARENT_URL: 'https://asgard-web-apis-stage.frt.one/',
    
}
//trace/api/v1/get_detailed_productivity_chart?session=cac64e89b48f409d938b9f877117f62a&org_id=28&start_date=2022-11-18&end_date=2022-11-18&slug=employee&tag_serial=01C618C8DC4338

export const BASE_URL = {
    VERSION: "v1/",
    BASE_URL: PARENT_URL.PARENT_URL + 'v1/',
    API_TIME_OUT: 300000,
    SUCCESS: 200,
    FAILED: 400,
    SERVERERROR: 1002,
    ACEESS_DENINED: 401,
    DEFAULT_IMAGE: PARENT_URL.PARENT_URL + "assets/images/user.png"
}

/**
 * Api method
 */
export const API_METHOD = {
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    PUT: 'PUT'
}

export const REQUEST_FORMATE = {
    RAW: 'RAW',
    FORM: 'FORM'
}

/**
 * api headers
 */
export const HEADER_KEYS = {
    CONTENT_TYPE_KEY: 'Content-Type',
    CONTENT_TYPE_VAL_MULTIPART_FORM_DATA: 'multipart/form-data',
    CONTENT_TYPE_JSON: 'application/json',
    CONTENTTYPE_FORM_X: 'application/x-www-form-urlencoded;charset=UTF-8'
}


/**
 * Url collections
 */
export const URLCollection = {
    GET_CONSTANT:BASE_URL.BASE_URL+'constants/getConstants/',
    LOGIN: BASE_URL.BASE_URL + 'user/login',
    TEAM_INFO: BASE_URL.BASE_URL_SEC + 'get_team_info?',
    LOGOUT: BASE_URL.BASE_URL + 'user/logout',
    GET_HOME_SCREEN: BASE_URL.BASE_URL+'customers/home/full',
    GET_NEWS_FEED_LIST:BASE_URL.BASE_URL+'customers/newsfeed/'

}
