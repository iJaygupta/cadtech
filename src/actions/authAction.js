import api from '../lib/request';
import apiPaths from '../lib/api';

export const register = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.signUp, data, false, function (response) {
        callback(response);
    })
};

export const login = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.logIn, data, false, function (response) {
        callback(response);
    })
};