module mvcapp {
    'use strict';

    angular.module('mvcapp').directive('hotelReviewsView', hotelReviewsViewDirective);

    function hotelReviewsViewDirective(): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'EA',
            scope: false,
            templateUrl: '/app/views/hotelReviewsViewDirective.html',
            controllerAs: 'vm',
        };
        return directive;
    }
    
} 