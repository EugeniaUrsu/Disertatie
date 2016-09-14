(function () {
    'use strict';

    angular
            .module('common.services')
            .factory('productResource',
                    ['$resource',
                     'appSettings',
                     'currentUser',
                     productResource])

    function productResource($resource, appSettings, currentUser) {
        return $resource(appSettings.serverPath + "/api/products/:id", null,
        {
           ' query': {

            method: 'GET',

            isArray: true,

            headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'get': {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'save': {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'update': {
                method: 'PUT',
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            }
        });
    }
})();