module mvcapp {
    'use strict';

    export interface IWebRequest {
        get<T>(url: string, params?: any): ng.IPromise<T>;
        post<T>(url: string, params: any): ng.IPromise<T>;
        httpRequest<T>(method: string, url: string, data?: any): ng.IPromise<T>
    }

    class WebRequest implements IWebRequest {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, $timeout: ng.ITimeoutService) {
        }
        get<T>(url: string, params?: any): ng.IPromise<T> {
            return this.httpRequest<T>("GET", url, params);
        }
        post<T>(url: string, params: any): ng.IPromise<T> {
            return this.httpRequest<T>("POST", url, params);
        }
        httpRequest<T>(method: string, url: string, params?: any): ng.IPromise<T> {
            var deferred = this.$q.defer();
            var request = {
                method: method,
                url: url,
                data: null,
                params: null
            };

            if (params)
                request.params = params;

            this.$http(request).success((data, status, headers, config) => { return deferred.resolve(data) })
                .error((data, status, headers, config) => { debugger; alert(data); deferred.reject({ data: data, status: status }) });

            return deferred.promise;
        }
    }

    factory.$inject = ['$http', '$q', '$timeout'];
    function factory($http, $q, $timeout) {
        return new WebRequest($http, $q, $timeout);
    }
    angular.module('mvcapp').factory('webRequest', factory);
}