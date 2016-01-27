(function () {
	'use strict';
	angular
		.module('com.module.users')
		.factory('AppAuth', function () {
			var self = {
				login: function(data, cb){
					
					return cb(null, self.currentUser);
				},
				logout: function(cb){
					// $http.post('/auth/logout');
					self.currentUser = {};
					//clear cookie access_token
					return cb();
				},
				currentUser: function(cb){
					return cb(null, {
						username: 'xxx',
						role: 'administrator'
					});
				}
			}
			return self;
		})
})();
