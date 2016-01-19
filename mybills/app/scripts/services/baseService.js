(function() {
    'use strict';

    angular
    	.module('mybillsApp')
    	.factory('BaseFactory', BaseFactory);

    	function BaseFactory ($q, $log)
    	{
    		var factory = {};
        factory.AUTH_REF = new Firebase("https://popping-heat-8894.firebaseio.com");
        factory.USER_REF = new Firebase("https://popping-heat-8894.firebaseio.com/users");
			  return factory;
    	};
})();
