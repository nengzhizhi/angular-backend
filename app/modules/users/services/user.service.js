(function(){
  'use strict';
  angular
    .module('com.module.users')
    .service('UserService', function ($state) {
      this.getFormFields = function (formType) {
        var form = [
          {
            key: 'username',
            type: 'input',
            templateOptions: {
              label: "用户名",
              required: true
            }
          }, {
            key: 'role',
            type: 'select',
            templateOptions: {
              label: '角色',
              required: true,
              options: [
                {
                  name: '管理员',
                  value: 'administrator'
                }
              ]
            }
          }
        ];
        return form;
      }
    })
})();
