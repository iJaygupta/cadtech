/*
* @Description : Common library to send http requests
* @Author : Jay
* @Version : 1.0
*/

import axios from 'axios';
import { Cookies } from 'react-cookie';

// import auth 		from './auth';

const self = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
    fingerPrint: '',
    setMethod: function (method) {
        self.method = method;
        return self;
    },
    setHeader: function (key, value) {
        self.headers[key] = value;
        return self;
    },
    reset: function () {
        self.method = "GET";
        self.headers = { "Content-Type": "application/json" };
        return self;
    },
    handleApiError: function () {
        // return auth.signout();
    },
    setFingerPrint: function (fingerPrint) {
        self.fingerPrint = fingerPrint;
        return self;
    },
    sendRequest: function (url, data, authenticate, callback, dispatch) {

        if (self.fingerPrint) {
            self.setHeader('fingerPrint', self.fingerPrint)
        } else {
            // var fingerPrintFromCookies = (typeof Cookies.load('fingerPrint') != 'undefined') ? Cookies.load('fingerPrint') : ''
            let fingerPrintFromCookies = ""
            self.setHeader('fingerPrint', '');
            self.setFingerPrint(fingerPrintFromCookies);
        }
        // (authenticate) ? self.setHeader('Authorization', (typeof localStorage.getItem('token') != 'undefined') ? localStorage.getItem('token') : '') : '';
        url = process.env.REACT_APP_API_URL + url
        return axios({
            method: self.method,
            url: url,
            responseType: 'json',
            headers: self.headers,
            data: data,
            timeout: 120000,
            params: (self.method == "GET") ? data : {}
        })
            .then(function (response) {
                self.reset();

                //this if condition has been added to logout on behalf account if the connection does not exit at the time of api hit
                if (authenticate) {
                    if (response.data.code === "CEC4007") {

                        dispatch({
                            type: 'connectionRemoved',
                            data: true
                        });
                    }
                    // commented for guest user
                    // if (["CEC4003"].indexOf(response.data.code) != -1) {
                    // 	if (self.handleApiError()) {
                    // 		dispatch({
                    // 			type: 'logout',
                    // 			error: false,
                    // 			msg: "Request not fulfilled " + response.data.code,
                    // 			isAuthenticated: auth.isAuthenticated()
                    // 		});
                    // 	}
                    // }
                }

                callback(response);
            })
            .catch(function (error) {
                //if (self.handleApiError()) {
                // dispatch(common.removeNotification());
                // dispatch(common.notify("Something went wrong. Please try again later.", 'error'));
                //}
                console.error("API LIB ERROR : ", error);
            });
    },
    sendExtRequest: function (url, data, callback) {

        return axios({
            method: self.method,
            url: url,
            responseType: 'json',
            headers: self.headers,
            data: data,
            timeout: 120000,
            params: (self.method == "GET") ? data : {}
        })
            .then(function (response) {
                self.reset();

                callback(null, response);
            })
            .catch(function (error) {
                callback(error, null);
            });
    }
}

export default self;