(function(){
  'use strict';
  angular
    .module('com.module.users')
    .run(function ($rootScope) {
      $rootScope.addMenu('用户管理', 'app.users.list', 'fa-user', [
        { name: '用户列表', sref: 'app.users.list' },
        { name: '添加用户', sref: 'app.users.add' }
      ]);
    })
})();
