(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'app/home/home.html', title: 'Home' })
            .otherwise({ redirectTo: '/' });
    }

})();