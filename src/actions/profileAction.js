import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const getUserAccountDetails = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getUserAccountDetails, null, true, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};

export const updateUserAccountDetails = (data, callback) => {
    return api.setMethod('PUT').sendRequest(apiPaths.getUserAccountDetails, data, true, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};

export const getAllUsers = (filters, callback) => {
    let getAllUsersUrl = buildUrl(apiPaths.getAllUsers, filters)
    return api.setMethod('GET').sendRequest(getAllUsersUrl, null, true, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};
