(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'angularMoment'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'Home',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/resume', {
                title: 'Resume',
                templateUrl: 'app/resume/resume.html',
                controller: 'ResumeCtrl',
                controllerAs: 'vm'
            })
            .when('/portfolio', {
                title: 'Portfolio',
                templateUrl: 'app/portfolio/portfolio.html',
                controller: 'PortfolioCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }

})();