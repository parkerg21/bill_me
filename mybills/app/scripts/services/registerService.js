(function() {
  'use strict';

  angular
    .module('mybillsApp')
    .factory('RegisterService', RegisterService);

  RegisterService.$inject = ['$q', '$log', '$firebaseAuth', '$firebaseArray', '$firebaseObject','BaseFactory'];

  function RegisterService($q, $log, $firebaseAuth, $firebaseArray, $firebaseObject, BaseFactory)
  {
    var factory = angular.extend(BaseFactory, {});
    factory.isAuth = isAuth;
    factory.getUser = getUser;
    factory.login = login;
    factory.logoff = logoff;
    factory.register = register;

    function login (token)
    {
      var deferred = $q.defer();
      if(validate(token))
      {
        $firebaseAuth(BaseFactory.AUTH_REF).$authWithPassword({email: token.username, password: token.password}).then(function(auth) {
          deferred.resolve($firebaseObject(BaseFactory.USER_REF.child(auth.uid)).$loaded);
        }, function(error) {
          deferred.reject("LOGIN::Invalid login! ERROR: " + error);
        });
      }
      else
      {
        deferred.reject("LOGIN::Invalid login! ERROR: Invalid credentials.");
      }

      return deferred.promise;
    };

    function logoff() {
      return $firebaseAuth(BaseFactory.AUTH_REF).$unauth();
    };

    function isAuth()
    {
      var auth = false;
      if($firebaseAuth(BaseFactory.AUTH_REF).$getAuth())
      {
        auth = true;
      }
      return auth;
    };

    function getUser() {
      var deferred = $q.defer();

      getAuth().then(function(authData) {
        return authData;
      }).then(function(authData) {
        if(authData) {
          return $firebaseObject(BaseFactory.USER_REF.child(authData.uid)).$loaded();
        } else {
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
    };


    function validate(token)
    {
      return (token && token.username && token.password && token.username.trim().length > 0 && token.password.trim().length > 0);
    };

    function register ( registration )
    {
      var deferred = $q.defer();
      var credentials = {email: registration.email, password: registration.password};
      console.log("Registration: " + registration)
      $firebaseAuth(BaseFactory.AUTH_REF).$createUser(credentials).then(function(auth){
        return auth;
      }, function(error) {
        deferred.reject("REGISTRATION::Unable to create Firebase user! ERROR: " + error);
      }).then(function(auth) {
        return $firebaseAuth(BaseFactory.AUTH_REF).$authWithPassword(credentials);
      }, function(error){
        deferred.reject("REGISTRATION::Invalid login! ERROR: " + error);
      }).then(function(auth) {
        return $firebaseObject(BaseFactory.USER_REF.child(auth.uid));
      }, function(error) {
        deferred.reject("REGISTRATION::Unable to create Bill Me user! ERROR: " + error);
      }).then(function(user){
        if (user){
          user.email = registration.email;
          user.firstName = registration.firstName;
          user.lastName = registration.lastName;
          deferred.resolve(user.$save());
        }

      }, function(error) {
        deferred.reject("REGISTRATION::Unable to update Bill Me user! ERROR: " + error);
      });

      return deferred.promise;
    };

    return factory;
  };
})();

