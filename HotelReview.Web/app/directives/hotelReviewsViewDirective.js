var mvcapp;
(function (mvcapp) {
    'use strict';
    angular.module('mvcapp').directive('hotelReviewsView', hotelReviewsViewDirective);
    function hotelReviewsViewDirective() {
        var directive = {
            restrict: 'EA',
            scope: false,
            templateUrl: '/app/views/hotelReviewsViewDirective.html',
            controllerAs: 'vm',
        };
        return directive;
    }
})(mvcapp || (mvcapp = {}));
