var mvcapp;
(function (mvcapp) {
    var hotelReviewController = (function () {
        function hotelReviewController(hotelService, $scope, $interval) {
            var vm = this;
            vm.onHotelSelect = function (hotelId) {
                debugger;
                if (hotelId > 0) {
                    hotelService.getHotelReviews(hotelId).then(function (data) {
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
        hotelReviewController.$inject = ['hotelService', '$scope', '$interval'];
        return hotelReviewController;
    }());
    mvcapp.hotelReviewController = hotelReviewController;
    angular.module('mvcapp').controller('hotelReviewController', hotelReviewController);
})(mvcapp || (mvcapp = {}));
