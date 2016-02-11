/* global moment */
(function () {

    angular
        .module('app')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ['positionRepo'];

    function PortfolioCtrl(positionRepo) {
        var vm = this;

        vm.positions = positionRepo.list;

        return vm;
    }
})();