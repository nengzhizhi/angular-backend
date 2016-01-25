(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('MainCtrl', function ($scope, $rootScope, $location, AppAuth) {
			if (!AppAuth.currentUser) {
				return $location.path('/login');
			}

			$scope.username = AppAuth.currentUser.username;
			$scope.menuoptions = $rootScope.menu;
		});
})();
