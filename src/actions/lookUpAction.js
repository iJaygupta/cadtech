import api from '../lib/request';
import apiPaths from '../lib/api'

export const getLookUpData = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getLookUpData, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};