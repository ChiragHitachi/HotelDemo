var app;
(function (app) {
    'use strict';
    angular.module('mvcapp').directive('hotelDropdown', HotelDropdown);
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;
    function HotelDropdown() {
        var directive = {
            restrict: 'EA',
            scope: {
                onHotelChange: '&',
                id: '@?',
                selectedHotel: '='
            },
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1)
                + 'hotelDropdown.html',
            controller: hotelDropdownController,
            controllerAs: 'vm',
            bindToController: true,
        };
        return directive;
    }
    var hotelDropdownController = (function () {
        function hotelDropdownController($scope, hotelService) {
            var vm = this;
            getHotels();
            //vm.onHotelSelect = () => {
            //    debugger;
            //    if (vm.selectedHotel) {
            //        vm.onHotelChange();
            //       // vm.onHotelChange();
            //    }
            //};
            function getHotels() {
                debugger;
                if (!vm.hotels) {
                    hotelService.getHotels().then(function (data) { debugger; vm.hotels = data; });
                }
            }
        }
        //onHotelSelect: () => void;
        hotelDropdownController.$inject = ['$scope', 'hotelService'];
        return hotelDropdownController;
    }());
    app.hotelDropdownController = hotelDropdownController;
})(app || (app = {}));
//# sourceMappingURL=hotelDropdown.js.map