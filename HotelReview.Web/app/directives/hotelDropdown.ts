odule app {
    'use strict';

    angular.module('mvcapp').directive('hotelDropdown', HotelDropdown);
    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length - 1].src;

    function HotelDropdown(): ng.IDirective {
        var directive = <ng.IDirective>{
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
            bindToController :  true,
        };
        return directive;
    }

    export class hotelDropdownController {
        hotels: Hotel[];
        selectedHotel: Hotel;
        onHotelChange: () => void;
        //onHotelSelect: () => void;
        static $inject = ['$scope', 'hotelService'];
        constructor($scope: ng.IScope, hotelService : IHotelService) {
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
                    hotelService.getHotels().then((data) => { debugger; vm.hotels = data });
                }
            }
        }
    }
}