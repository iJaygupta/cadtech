import api from '../lib/request';
import apiPaths from '../lib/api';

export const contactUs = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.contactUs, data, false, function (response) {
        callback(response.data);
    })
};

export const getTeamMember = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getTeamMember, null, false, function (response) {
        callback(response.data);
    })
};

