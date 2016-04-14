(function() {
  'use strict';

  angular
    .module('mybillsApp')
    .factory('BillDataService', BillDataService);

  BillDataService.$inject = ['$q', '$log', '$firebaseAuth', '$firebaseArray', '$firebaseObject', 'BaseFactory'];

  function BillDataService($q, $log, $firebaseAuth, $firebaseArray, $firebaseObject, BaseFactory)
  {
    var factory = angular.extend(BaseFactory, {});
    factory.login = login;
    factory.logout = logout;
    factory.isAuth = isAuth

    factory.ClearCredentials = function () {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
    };


    function login (user)
    {
      var deferred = $q.defer();
        $firebaseAuth(BaseFactory.AUTH_REF).$authWithPassword({email: user.email, password: user.password}).then(function(auth) {
          deferred.resolve($firebaseObject(BaseFactory.USER_REF.child(auth.uid)).$loaded);
        }, function(error) {
          deferred.reject("LOGIN::Invalid login! ERROR: " + error);
        })
      return deferred.promise;
    };

    function logout() {
      console.log("in logout")
      return $firebaseAuth(BaseFactory.AUTH_REF).$unauth();
    };


    function getUser() {
      var deferred = $q.defer();
      getAuth().then(function(authData) {
        return authData;
      }).then(function(authData) {
        if(authData) {
          console.log("Found authData for user");
          return $firebaseObject(BaseFactory.USER_REF.child(authData.uid)).$loaded();
        } else {
          console.log("Did Not Find authData for user");
          return null;
        }
      }).then(function(userData) {
        deferred.resolve(userData);
      });

      return deferred.promise;
    };

    function getAuth() {
      var deferred = $q.defer();
      deferred.resolve($firebaseAuth(BaseFactory.AUTH_REF).$getAuth());
      return deferred.promise;
    }

    return factory;
  };
})();

