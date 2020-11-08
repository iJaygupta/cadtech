import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';



export const addToCart = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addToCart, data, false, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};

export const getProductsByCart = (Id, callback) => {
    return api.setMethod('GET').sendRequest(`${apiPaths.getProductsByCart}/${Id}`, null, false, function (response) {
        if (response) {
            callback(response.data);
        } else {
            callback(null);
        }
    })
};