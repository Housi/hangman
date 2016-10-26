module.exports = angular.module('display', [])
  .controller('displayController', require('./displayController'))
  .component('display', {
    bindings: {
      data: '='
    },
    controller: 'displayController as vm',
    templateUrl: 'display/display.html'
  });
