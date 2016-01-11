'use strict';

angular.module('mybillsApp')
  .controller('AuthCtrl',["$scope","$location","$window","authProvider", function ($scope,$location,$window,authProvider) {
    var ref = new Firebase("https://popping-heat-8894.firebaseio.com");

    $scope.login = function() {
      ref.authWithPassword({
        email    : $scope.auth.email,
        password : $scope.auth.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log($scope.auth.email);
          authProvider.setUser($scope.auth.email);
          $window.location.href = '#/currentBills';
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }


}]);
