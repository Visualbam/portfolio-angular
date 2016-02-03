(function () {

    angular
        .module('app')
        .controller('NavBarCtrl', NavBarCtrl);

    NavBarCtrl.$inject = ['$location'];

    function NavBarCtrl($location) {
        var vm = this;

        vm.isActive = function (route) {
            return route === $location.path();
        }

        return vm;
    }
})();