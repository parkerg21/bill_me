'use strict';

angular.module('mybillsApp')
  .controller('AuthCtrl',["$rootScope","$scope","$location","$window","authProvider", function ($rootScope,$scope,$location,$window,authProvider) {
    var ref = new Firebase("https://popping-heat-8894.firebaseio.com");
    $scope.isAuth = false;
    $scope.auth = {};

    $rootScope.$on("$routeChangeStart", function() {
      $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function() {
      $rootScope.loading = false;
    });


    $scope.login = function() {
      authProvider.authWithPassword(ref, {
        email : $scope.auth.email,
        password : $scope.auth.password
      }).then(function(result){
        $rootScope.authentication = true;
        console.log($rootScope.authentication);
          $location.path('/currentBills',false);
      });
    };

    $scope.logout = function() {
      ref.unauth();
      $rootScope.authentication = false;
      console.log("logout" + $rootScope.authentication);
      $location.path('/home', false);
    };


}]);
