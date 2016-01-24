(function () {
	'use strict';
	angular
		.module('com.module.users')
		.factory('AppAuth', function () {
			var self = {
				login: function(data, cb){
					// $http.post('/auth/login', {
					// 	username: data.username,
					// 	password: data.password
					// }).then(function(response){
					//
					// })

					self.currentUser = {
						username: "test"
					}
					//set cookie access_token
					return cb(null, self.currentUser);
				},
				logout: function(cb){
					// $http.post('/auth/logout');
					self.currentUser = {};
					//clear cookie access_token
					return cb();
				},
				ensureHasCurrentUser: function(cb){
					// $http.get('/auth/current').then(function(response){
					//
					// })

					// if(response.user != null)
					//		return true;
					return cb(null, true);
				}
			}
			return self;
		})
})();
