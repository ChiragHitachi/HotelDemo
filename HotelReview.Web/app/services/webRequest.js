var mvcapp;
(function (mvcapp) {
    'use strict';
    var WebRequest = (function () {
        function WebRequest($http, $q, $timeout) {
            this.$http = $http;
            this.$q = $q;
        }
        WebRequest.prototype.get = function (url, params) {
            return this.httpRequest("GET", url, params);
        };
        WebRequest.prototype.post = function (url, params) {
            return this.httpRequest("POST", url, params);
        };
        WebRequest.prototype.httpRequest = function (method, url, params) {
            var deferred = this.$q.defer();
            var request = {
                method: method,
                url: url,
                data: null,
                params: null
            };
            if (params)
                request.params = params;
            this.$http(request).success(function (data, status, headers, config) { return deferred.resolve(data); })
                .error(function (data, status, headers, config) { debugger; alert(data); deferred.reject({ data: data, status: status }); });
            return deferred.promise;
        };
        return WebRequest;
    }());
    factory.$inject = ['$http', '$q', '$timeout'];
    function factory($http, $q, $timeout) {
        return new WebRequest($http, $q, $timeout);
    }
    angular.module('mvcapp').factory('webRequest', factory);
})(mvcapp || (mvcapp = {}));
//# sourceMappingURL=webRequest.js.map