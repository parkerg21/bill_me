(function() {
    'use strict';

    angular
    	.module('mybillsApp')
    	.controller('LoginController', LoginController);

    	LoginController.$inject = ['$rootScope','$scope', '$log', '$controller', '$state', '$timeout', 'AuthorizationService'];

    	function LoginController ($rootScope, $scope, $log, $controller, $state, $timeout, AuthorizationService) {
          $scope.token = {username:"",password:""};
          $scope.login = login;
          $scope.logout = logout;
          $scope.auth = {};

          function login() {
          AuthorizationService.login($scope.auth).then(function(user){
            console.log("made it to authorization controller");
            $rootScope.authentication = true;
            $scope.user = user;
            $state.go('currentBills');
          }, function(error) {
            console.log("Error display: " + error);
            $scope.error = error;
          });
        };

         function logout(){
           AuthorizationService.logout();
           $rootScope.authentication = true;
           console.log("Logout successful");
           $state.go('login');
         }
      };
})();
