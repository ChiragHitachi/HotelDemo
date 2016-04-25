module mvcapp {
    'use strict';

    angular.module('mvcapp').directive('hotelReviewsView', hotelReviewsViewDirective);
 
    function hotelReviewsViewDirective(): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'EA',
            scope: false,
            //templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) +
            templateUrl: '/app/views/hotelReviewsViewDirective.html',
            //controller: hotelReviewsViewDirectiveController,
            //controllerAs: 'vm',
            //bindToController: true,
        };
        return directive;
    }

    export class hotelReviewsViewDirectiveController {
        //hotelReviews: HotelReview[];
        reviewsExists: boolean;
        static $inject = ['$scope'];
        constructor($scope: ng.IScope) {
            var vm = this;
           
        }
    }
} 