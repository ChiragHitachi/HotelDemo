module mvcapp {

    export class hotelReviewController {
        selectedHotel: Hotel;
        reviews: HotelReview[];
        onHotelSelect: (hotelId: number) => void;
        showReviews: boolean;
        static $inject = ['hotelService', '$scope'];

        constructor(hotelService: IHotelService, $scope: ng.IScope) {
            var vm = this;

            vm.onHotelSelect = (hotelId: number) => {
                debugger;
                if (hotelId > 0) {
                    hotelService.getHotelReviews(hotelId).then((data) => {
                        $scope.$applyAsync();
                        vm.reviews = data;
                        vm.showReviews = true;
                        debugger;

                        //$scope.$apply((function () {
                        //    vm.reviews = data; vm.showReviews = true;
                        //}));
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