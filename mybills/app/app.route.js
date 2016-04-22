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
      templateUrl: 'home/home.html'
		})
		.state('login',
		{
      url:'/login',
      templateUrl: 'login/login.html',
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
        resolve :
        {
          loggedInUser : function(AuthorizationService)
          {
            return AuthorizationService.getUser();
          }
        }
      })
	}]);

})();

