var mvcapp;
(function (mvcapp) {
    'use strict';
    angular.module('mvcapp').directive('hotelDropdown', hotelDropdownDirective);
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;
    function hotelDropdownDirective() {
        var directive = {
            restrict: 'EA',
            scope: {
                id: "@?",
                onChange: "&",
                selectedHotel: "=",
            },
            //templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) +
            templateUrl: '/app/views/hotelDropdownDirective.html',
            controller: hotelDropdownDirectiveController,
            controllerAs: 'vm',
            bindToController: true,
        };
        return directive;
    }
    var hotelDropdownDirectiveController = (function () {
        function hotelDropdownDirectiveController($scope, hotelService, $element) {
            var vm = this;
            getHotels();
            function getHotels() {
                if (!vm.hotels) {
                    hotelService.getHotels().then(function (data) { debugger; vm.hotels = data; });
                }
            }
        }
        hotelDropdownDirectiveController.$inject = ['$scope', 'hotelService', '$element'];
        return hotelDropdownDirectiveController;
    }());
    mvcapp.hotelDropdownDirectiveController = hotelDropdownDirectiveController;
})(mvcapp || (mvcapp = {}));
