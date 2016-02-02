(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['detailRepo'];

    function HomeCtrl(detailRepo) {
        var vm = this;

        vm.details = detailRepo.list;

        return vm;
    }

})();