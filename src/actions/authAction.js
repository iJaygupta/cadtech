import api from '../lib/request';
import apiPaths from '../lib/api';

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

export const changePassword = (data, callback) => {
    return api.setMethod('PUT').sendRequest(apiPaths.changePassword, data, true, function (response) {
        if (response) {
            callback(response.data);
        }
    })
}