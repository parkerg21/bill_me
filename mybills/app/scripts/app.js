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

 /* .run(['$rootScope', '$route','$cookieStore','$location', 'authProvider', function ($rootScope,$route,$cookieStore,$location,authProvider) {
    $rootScope.$on('$routeChangeStart', function (event) {

      $rootScope.globals = $cookieStore.get('globals') || {};
      console.log($rootScope.globals)
      if (!$rootScope.authentication) {
        console.log('LOC: ' + $location.url());
        console.log('DENY : Redirecting to Login');
        $location.path('/login');
      }
      else {
        console.log('ALLOW');
      }
    });
  }])*/

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
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
      .when('/currentBills', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/logout', {
        controller: 'AuthCtrl',
        redirectTo: '/'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      })
  });


