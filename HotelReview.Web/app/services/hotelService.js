var mvcapp;
(function (mvcapp) {
    'use strict';
    var HotelService = (function () {
        function HotelService(webRequest) {
            var vm = this;
            vm.getHotels = function () {
                return webRequest.get('api/hotel').then(function (result) { return result; });
            };
            vm.getHotelReviews = function (hotelId) {
                return webRequest.get('api/HotelReview', { hotelId: hotelId }).then(function (result) { return result; });
            };
        }
        HotelService.$inject = ['webRequest'];
        return HotelService;
    }());
    angular.module('mvcapp').service('hotelService', HotelService);
})(mvcapp || (mvcapp = {}));
