/* global moment */
(function () {

    angular
        .module('app')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ['projectRepo'];

    function PortfolioCtrl(projectRepo) {
        var vm = this;

        vm.projects = projectRepo.list;

        return vm;
    }
})();