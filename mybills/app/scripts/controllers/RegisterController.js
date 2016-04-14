(function() {
  'use strict';

  angular
    .module('mybillsApp')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', '$log', 'RegisterService','$state'];

  function RegisterController($scope, $log, RegisterService,$state)
  {
    $scope.register = register;
    $scope.auth = {};
    $scope.clear = clear;

    function clear()
    {
      $scope.auth = {};
      $scope.error = '';
    };

    function register()
    {
      RegisterService.register($scope.auth).then(function(user){
        $state.go('currentBills');
      }, function(error) {
            console.log("Error display: " + error);
            $scope.error = error;
      });
    };

  };
})();
