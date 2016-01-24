(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('RouteCtrl', function (ApiService, AppAuth, $location) {
			if (!AppAuth.currentUser) {
				$location.path('/login');
			} else {
				$location.path('/app');
			}
		})
})();
