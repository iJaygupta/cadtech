import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const addToCart = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addToCart, data, true, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};

export const getAllOrders = (filters, callback) => {
    let getAllUsersUrl = buildUrl(apiPaths.getAllOrders, filters)
    return api.setMethod('GET').sendRequest(getAllUsersUrl, null, true, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};
