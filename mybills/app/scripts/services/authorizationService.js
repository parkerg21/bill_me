(function() {
  'use strict';

  angular
    .module('mybillsApp')
    .factory('AuthorizationService', AuthorizationService);

  AuthorizationService.$inject = ['$q', '$log', '$firebaseAuth', '$firebaseArray', '$firebaseObject', 'BaseFactory'];

  function AuthorizationService($q, $log, $firebaseAuth, $firebaseArray, $firebaseObject, BaseFactory)
  {
    var factory = angular.extend(BaseFactory, {});
    factory.login = login;

    factory.ClearCredentials = function () {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
    };

    function login ( userObj ) {
      var deferred = $q.defer();
      console.log("UserObj: " + userObj.email)
      $firebaseAuth(BaseFactory.AUTH_REF).$authWithPassword(userObj).then(function(authData) {
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
      return deferred.promise;
    };

    return factory;
  };
})();

