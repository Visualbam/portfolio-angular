(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'angularMoment', 'ui.bootstrap', 'angularLazyImg'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', 'lazyImgConfigProvider'];

    function routeConfig($routeProvider, lazyImgConfigProvider) {
        lazyImgConfigProvider.setOptions({
            offset: 100, // how early you want to load image (default = 100)
            errorClass: 'error', // in case of loading image failure what class should be added (default = null)
            successClass: 'success', // in case of loading image success what class should be added (default = null)
            onError: function(image){}, // function fired on loading error
            onSuccess: function(image){} // function fired on loading success
        });

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