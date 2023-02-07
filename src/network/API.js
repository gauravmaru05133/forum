import { URLCollection, API_METHOD, HEADER_KEYS, BASE_URL, REQUEST_FORMATE, } from './UrlCollection'
import axios from 'axios';
import strings from '../utils/strings';
import Constant from '../constant';


export const API = {
    getAppConstant: (onResponse, data) => {
        request(onResponse, data, API_METHOD.GET, URLCollection.GET_CONSTANT)
    },
    login: (onResponse, data) => {
        request(onResponse, data, API_METHOD.POST, URLCollection.LOGIN)
    },
    getHomeScreen: (onResponse, data) => {
        request(onResponse, data, API_METHOD.GET, URLCollection.GET_HOME_SCREEN)
    },
    getNewsFeeds: (onResponse, data) => {
        request(onResponse, data, API_METHOD.GET, URLCollection.GET_NEWS_FEED_LIST)
    },
}

//is heck intenet connection
export const isInternetCheck = () => {

}



const request = async (onResponse, data, type, url, requestFormate) => {
    let appHeaders = {
        'Content-Type': HEADER_KEYS.CONTENT_TYPE_JSON,
        'mallId': "mall_1",
        'Authorization': 'Bearer '+Constant.accessToken
    }

    if (Constant.accessToken != undefined) {
        //appHeaders.Authorization=Constant.accessToken

    }

    /*if (type == API_METHOD.GET) {
        if (Constant.accessToken != undefined) {
            console.log("globals.userToken", Constant.accessToken)
            appHeaders = {
                'Content-Type': HEADER_KEYS.CONTENT_TYPE_JSON,
                'Authorization': 'Bearer ' + Constant.accessToken
            }
        } else {
            appHeaders = {
                'Content-Type': HEADER_KEYS.CONTENT_TYPE_JSON,
            }
        }
    }

    else if (type == API_METHOD.POST) {
        appHeaders = {
            'Content-Type': HEADER_KEYS.CONTENT_TYPE_JSON,
        }
    }
    else if (type == API_METHOD.PUT) {
        appHeaders = {
            'Content-Type': HEADER_KEYS.CONTENTTYPE_FORM_X,
            'Authorization': 'Bearer ' + Constant.accessToken
        }
    }
    else {
        if (Constant.accessToken != undefined && Constant.accessToken != '') {
            appHeaders = {
                'Content-Type': HEADER_KEYS.CONTENT_TYPE_VAL_MULTIPART_FORM_DATA,
                'Authorization': 'Bearer ' + Constant.accessToken
            }
        }
    }*/

    let apiconfig = {
        method: type,
        url: url,
        headers: appHeaders,
        timeout: BASE_URL.API_TIME_OUT,
        timeoutErrorMessage: strings.api_timeout,
        data:data
    };
    if (API_METHOD.POST == type) {
        //  apiconfig.data = data
    } else {

    }
    /*if (API_METHOD.GET == type) {
        apiconfig = {
            method: type,
            url: url,
            headers: appHeaders,
            timeout: BASE_URL.API_TIME_OUT,
            timeoutErrorMessage: strings.api_timeout
        }
    } else if (API_METHOD.DELETE == type) {
        apiconfig = {
            method: type,
            url: url,
            headers: appHeaders,
            timeout: BASE_URL.API_TIME_OUT,
            timeoutErrorMessage: strings.api_timeout
        }
    }
    else if (REQUEST_FORMATE.RAW == requestFormate) {
        apiconfig = {
            method: type,
            url: url,
            headers: appHeaders,
            timeout: BASE_URL.API_TIME_OUT,
            timeoutErrorMessage: strings.api_timeout
        }
    }
    else {
        apiconfig = {
            method: type,
            url: url,
            headers: appHeaders,
            timeout: BASE_URL.API_TIME_OUT,
            timeoutErrorMessage: strings.api_timeout,
            data: data
        }
    }*/

    console.log("header_value :ELSE::", appHeaders)
    console.log("featureURL >>> " + url);
    console.log("data >>> " + JSON.stringify(data));
    console.log("type " + type);
    console.log("apiconfig ", apiconfig);

    await axios(apiconfig).then((response) => {
        console.log("API_RESPONSE :: -> ", url, " = ", JSON.stringify(data), " = ", response)

        if (response.data) {
            console.log("api_res>", response.data)
            if (response.data?.status?.code == BASE_URL.SUCCESS) {
                onResponse.success(response.data?.data)

            } else {
                onResponse.error(response.data?.status)
            }
        }
    }).catch((error) => {
        console.log("API_Failed::", error)
        if (error) {
            onResponse.error(error.message)
            /* if (error.response.data.message != undefined && error.response.data.message != null) {
                 if (withoutParamUrl != undefined && withoutParamUrl != null && withoutParamUrl != '') {
                     onResponse.error(error.message)
                 } else {
                     onResponse.error(error.message)
                 }
             } else {
                 onResponse.error("Server problem plese try again after some time")
             }*/
        } else {
            onResponse.error(error.message)
        }
    })
}
