angular.module('mybillsApp').factory('authProvider', function($rootScope,$cookieStore,$firebase, $q) {
    var factory = {};

  factory.ClearCredentials = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
  };
  factory.authWithPassword = function authWithPassword(rootRef, userObj) {
    var deferred = $q.defer();

    rootRef.authWithPassword(userObj, function onAuth(err, authData) {
      if (err) {
        deferred.reject(err);
      } else if (authData) {
        deferred.resolve(authData);
        $rootScope.globals = {
          currentUser: {
            username: userObj.email,
            authdata: authData
          }
        };
        $cookieStore.put('globals', $rootScope.globals);
      }
    });
    return deferred.promise;
  };

    return factory;
  });
