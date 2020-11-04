import api from '../lib/request';
import apiPaths from '../lib/api';
import buildUrl from '../lib/utils';


export const getCourses = (filters, callback) => {
    let getCoursesUrl = buildUrl(apiPaths.getCourses, filters)
    return api.setMethod('GET').sendRequest(getCoursesUrl, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};

export const getCourseById = (courseId, callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getCourseById + courseId, null, false, function (response) {
        callback(response.data);
    })
};

export const addCourse = (data, callback) => {
    return api.setMethod('POST').sendRequest(apiPaths.addCourse, data, true, function (response) {
        callback(response.data);
    })
};

export const updateCourse = (courseId, data, callback) => {
    return api.setMethod('PUT').sendRequest(apiPaths.updateCourse + courseId, data, true, function (response) {
        callback(response.data);
    })
};

export const deleteCourse = (courseId, callback) => {
    return api.setMethod('DELETE').sendRequest(apiPaths.deleteCourse + courseId, null, true, function (response) {
        callback(response.data);
    })
};


export const getCourseCategories = (callback) => {
    return api.setMethod('GET').sendRequest(apiPaths.getCourseCategories, null, false, function (response) {
        if (response) {
            callback(response.data);
        }
    })
};