'use strict';

angular
  .module('mybillsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])

  .run(['$rootScope', '$location', 'authProvider', function ($rootScope, $location,authProvider) {
    $rootScope.$on('$routeChangeStart', function (event) {

      if (!authProvider.isLoggedIn()) {
        console.log('DENY : Redirecting to Login');
        $location.path('/login');
      }
      else {
        console.log('ALLOW');
      }
    });
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/billDetails', {
        templateUrl: 'views/billDetails.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .when('/currentBills', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/logout', {
        
        redirectTo: '/login'
      })
      .otherwise({
        redirectTo: '/'
      })
  });


