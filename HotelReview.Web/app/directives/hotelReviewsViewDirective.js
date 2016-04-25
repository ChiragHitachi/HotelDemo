var mvcapp;
(function (mvcapp) {
    'use strict';
    angular.module('mvcapp').directive('hotelReviewsView', hotelReviewsViewDirective);
    function hotelReviewsViewDirective() {
        var directive = {
            restrict: 'EA',
            scope: false,
            //templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) +
            templateUrl: '/app/views/hotelReviewsViewDirective.html',
        };
        return directive;
    }
    var hotelReviewsViewDirectiveController = (function () {
        function hotelReviewsViewDirectiveController($scope) {
            var vm = this;
        }
        hotelReviewsViewDirectiveController.$inject = ['$scope'];
        return hotelReviewsViewDirectiveController;
    }());
    mvcapp.hotelReviewsViewDirectiveController = hotelReviewsViewDirectiveController;
})(mvcapp || (mvcapp = {}));
//# sourceMappingURL=hotelReviewsViewDirective.js.map