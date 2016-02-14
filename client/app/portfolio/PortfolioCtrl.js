/* global moment */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ['projectRepo', '$uibModal'];

    function PortfolioCtrl(projectRepo, $uibModal) {
        var vm = this;

        vm.projects = projectRepo.list;

        vm.open = function (project) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/shared/modal/modal.html',
                controller: 'ModalInstanceCtrl',
                bindToController: true,
                resolve: {
                    project: function () {
                        return project;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
            });
        };

        return vm;
    }
})();