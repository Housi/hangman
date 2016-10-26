'use strict'

// @ngInject
function keyboardDirective($window){

  return {
    restrict: 'E',
    scope: {
     action: '&',
     disabled: '<'
    },
    link: link
  }

  function link(scope){
    $window.addEventListener('keypress', function(event){
      if(scope.disabled) return;
      scope.$applyAsync(function() {
        scope.action()(event.key);
      });
    });
  }
}

module.exports = keyboardDirective;
