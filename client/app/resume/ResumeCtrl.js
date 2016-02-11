/* global moment */
(function () {

    angular
        .module('app')
        .controller('ResumeCtrl', ResumeCtrl);

    ResumeCtrl.$inject = ['positionRepo'];

    function ResumeCtrl(positionRepo) {
        var vm = this;

        vm.positions = positionRepo.list;

        return vm;
    }
})();