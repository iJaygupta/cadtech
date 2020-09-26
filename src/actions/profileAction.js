import api from '../lib/request';
import apiPaths from '../lib/api';

export const getUserAccountDetails = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getUserAccountDetails, null, true, function (response) {
        callback(response.data);
    })
};

export const updateUserAccountDetails = (data, callback) => {
    return api.setMethod('PUT').sendRequest(apiPaths.getUserAccountDetails, data, true, function (response) {
        callback(response.data);
    })
};
