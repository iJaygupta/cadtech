import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const register = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.signUp, data, false, function (response) {
        callback(response.data);
    })
};

export const login = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.logIn, data, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};


export const googleLogin = (data, callback) => {
    let googleLoginUrl = buildUrl(apiPaths.googleLogin, data)
    return api.setMethod('GET').sendRequest(googleLoginUrl, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};
