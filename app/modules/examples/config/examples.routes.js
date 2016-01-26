(function(){
  'use strict';
  angular
    .module('com.module.examples')
    .config(function($stateProvider){
      $stateProvider
        .state('app.examples', {
          abstract: true,
          url: '/examples',
          templateUrl: 'modules/examples/views/main.html'
        })
        .state('app.examples.list', {
          url: '',
          templateUrl: 'modules/examples/views/list.html',
          controllerAs: 'ctrl',
          controller: function (events) {
            this.events = events;
          }
        })
      })
})();
