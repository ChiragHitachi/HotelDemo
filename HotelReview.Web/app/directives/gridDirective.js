var mvcapp;
(function (mvcapp) {
    'use strict';
    angular.module('mvcapp').directive('sGrid', sGridDirective);
    function sGridDirective() {
        var directive = {
            restrict: 'EA',
            scope: {
                id: "@?",
                header: "@",
                data: "@",
                canDelete: "@",
                deleteAction: "&",
                canEdit: "@",
                editAction: "&",
                canSort: "@",
                sortFields: "@"
            },
            templateUrl: '/app/views/sGridDirective.html',
            controller: sGridDirectiveController,
            controllerAs: 'vm',
            bindToController: true,
        };
        return directive;
    }
    var sGridDirectiveController = (function () {
        function sGridDirectiveController($scope, $element) {
            var vm = this;
        }
        sGridDirectiveController.$inject = ['$scope', '$element'];
        return sGridDirectiveController;
    }());
    mvcapp.sGridDirectiveController = sGridDirectiveController;
})(mvcapp || (mvcapp = {}));
