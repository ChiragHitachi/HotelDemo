module mvcapp {
    'use strict';

    angular.module('mvcapp').directive('hotelDropdown', hotelDropdownDirective);
    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length - 1].src;

    function hotelDropdownDirective(): ng.IDirective {
        var directive = <ng.IDirective>{
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

    export class hotelDropdownDirectiveController {
        hotels: Hotel[];
        public onHotelSelect: () => void;
        static $inject = ['$scope', 'hotelService', '$element'];
        constructor($scope: ng.IScope, hotelService: IHotelService, $element: ng.IAugmentedJQuery) {
            var vm = this;

            getHotels();

            function getHotels() {
                if (!vm.hotels) {
                    hotelService.getHotels().then((data) => { debugger; vm.hotels = data; });
                }
            }
        }
    }
} 