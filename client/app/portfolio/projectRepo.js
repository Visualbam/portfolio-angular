(function () {

    angular
        .module('app')
        .factory('projectRepo', projectRepo);

    function projectRepo() {
        var projectRepo = {
            list: []
        };

        projectRepo.list = [];

        return projectRepo;
    }

})();