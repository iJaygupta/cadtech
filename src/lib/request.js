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
        if (authenticate) {
            self.setHeader('Authorization', (typeof localStorage.getItem('token') != 'undefined') ? localStorage.getItem('token') : '');
        }
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
                if (authenticate) {
                }
                callback(response);
            })
            .catch(function (error) {
                console.error(error);
                callback(error.response);
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