angular.module('mybillsApp')
  .factory('authProvider', function() {
    var user;
    return {
      setUser : function(myUser){
        user = myUser;
      },
      isLoggedIn : function(){
        return(user)? user : false;
      }
    };
  });
