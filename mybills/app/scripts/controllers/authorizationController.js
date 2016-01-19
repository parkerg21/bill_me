(function() {
  'use strict';

  angular
    .module('mybillsApp')
    .controller('AuthorizationController', AuthorizationController);

  AuthorizationController.$inject = ['$scope', '$log', 'AuthorizationService'];

  function AuthorizationController($scope, $log, AuthorizationService)
  {
    $scope.isAuth = false;
    $scope.auth = {};
    $scope.login = login;

    function login() {
      AuthorizationService.login($scope.auth).then(function(result){
        $rootScope.authentication = true;
        $log.debug($rootScope.authentication);
        $location.path('/',false);
      }, function(error) {
        console.log("Error display: " + error);
        $scope.error = error;
      });
    };

  };
})();
