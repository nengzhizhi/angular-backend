(function(){
  'use strict';
  angular
    .module('com.module.core')
    .directive('side-nav', function(){
      return {
        templateUrl: 'modules/core/views/elements/side-nav.html'
      }
    })
})();
