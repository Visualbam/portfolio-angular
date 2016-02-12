(function () {

    angular
        .module('app')
        .factory('projectRepo', projectRepo);

    function projectRepo() {
        var projectRepo = {
            list: []
        };

        projectRepo.list = [
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            },
            {
                title: 'Hello world'
            }
        ];

        return projectRepo;
    }

})();