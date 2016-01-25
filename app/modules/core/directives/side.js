(function(){
  'use strict';
  angular
    .module('com.module.core')
    .directive('side', function(){
      return {
        templateUrl: 'modules/core/views/elements/side-nav.html'
      };
    });
})();
