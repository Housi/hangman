var angular = require('angular');

angular.module('hangman', [
  require('./modules/game').name,
  require('./modules/display').name,
  require('./modules/keyboard').name,
]);
