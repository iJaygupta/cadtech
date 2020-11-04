import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const contactUs = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.contactUs, data, false, function (response) {
        callback(response.data);
    })
};

export const getTeamMember = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getTeamMember, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};

export const addSubscribe = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addSubscribe, data, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};

export const getBulkData = (filters, callback) => {
    let getAllUsersUrl = buildUrl(apiPaths.getBulkData, filters)
    return api.setMethod('GET').sendRequest(getAllUsersUrl, null, true, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};

export const uploadCsv = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.uploadCsv, data, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};