module mvcapp {

    export class hotelReviewController {
        selectedHotel: Hotel;
        reviews: HotelReview[];
        onHotelSelect: (hotelId: number) => void;
        showReviews: boolean;
        static $inject = ['hotelService', '$scope', '$interval'];

        constructor(hotelService: IHotelService, $scope: ng.IScope, $interval : ng.IIntervalService) {
            var vm = this;

            vm.onHotelSelect = (hotelId: number) => {
                debugger;
                if (hotelId > 0) {
                    hotelService.getHotelReviews(hotelId).then((data) => {
                        vm.reviews = data;
                        vm.showReviews = true;
                        debugger;
                        //$interval(() => {
                        //    $scope.$applyAsync(($scope) => {
                        //        vm.reviews = data;
                        //        vm.showReviews = true;
                        //        debugger;
                        //    });
                        //}, 100, 1);
                    });
                }
            };

            //$scope.$watch('vm.selectedHotel', (newValue : number, oldValue : number) => {
            //    if (newValue != oldValue) {
            //        debugger;
                   
            //    }
            //});
        }
    }

    angular.module('mvcapp').controller('hotelReviewController', hotelReviewController);
}