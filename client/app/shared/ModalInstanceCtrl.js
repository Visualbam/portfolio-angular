(function () {

    angular
        .module('app')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'project'];

    function ModalInstanceCtrl($scope, $uibModalInstance, project) {

        $scope.project = project;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
})();