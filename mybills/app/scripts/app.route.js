(function() {
	'use strict';

	angular.module('mybillsApp')

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/');

		$stateProvider

		.state('home',
		{
      url:'/',
      templateUrl: 'views/home.html',
		})
		.state('login',
		{
      url:'/login',
      templateUrl: 'views/login.html',
      controller: 'LoginController'
		})
		.state('register',
		{
        url:'/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterController'
		})
    .state('currentBills',
      {
        url:'/currentBills',
        templateUrl: 'views/currentBills.html',
        controller: 'BillController',
        controllerAs: 'main'
      })
    .state('about',
      {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })

	}]);

})();

