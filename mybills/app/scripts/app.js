(function() {
  'use strict';
  angular
    .module('mybillsApp', ['ui.router', 'ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch', 'firebase'])

    .run(["$rootScope", "$location","AuthorizationService", function($rootScope, $location,AuthorizationService) {
      $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
          $location.path("/");
        }
      });
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
          console.log("Fired on state change...");
          if(!AuthorizationService.isAuth() && toState.url != '/home' && toState.url != '/register' && toState.url != '/'){
            console.log("not authorized..." + toState.url);
            $location.path("/");
          }

        })
    }]);


})();

