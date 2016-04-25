var mvcapp;
(function (mvcapp) {
    var hotelReviewController = (function () {
        function hotelReviewController(hotelService, $scope) {
            var vm = this;
            vm.onHotelSelect = function (hotelId) {
                debugger;
                if (hotelId > 0) {
                    hotelService.getHotelReviews(hotelId).then(function (data) {
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
        hotelReviewController.$inject = ['hotelService', '$scope'];
        return hotelReviewController;
    }());
    mvcapp.hotelReviewController = hotelReviewController;
    angular.module('mvcapp').controller('hotelReviewController', hotelReviewController);
})(mvcapp || (mvcapp = {}));
//# sourceMappingURL=hotelReviewController.js.map