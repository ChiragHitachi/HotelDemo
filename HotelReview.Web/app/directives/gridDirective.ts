module mvcapp {
    'use strict';

    angular.module('mvcapp').directive('sGrid', sGridDirective);
  
    function sGridDirective(): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'EA',
            scope: {
                id: "@?",
                header : "@",
                data: "@",
                canDelete: "@",
                deleteAction : "&",
                canEdit: "@",
                editAction: "&",
                canSort : "@",
                sortFields : "@"
            },
            templateUrl: '/app/views/sGridDirective.html',
            controller: sGridDirectiveController,
            controllerAs: 'vm',
            bindToController: true,
        };
        return directive;
    }

    export class sGridDirectiveController {
        header: any;
        data: any[];
        
        static $inject = ['$scope', '$element'];
        constructor($scope: ng.IScope, $element: ng.IAugmentedJQuery) {
            var vm = this;

           
        }
    }
} 