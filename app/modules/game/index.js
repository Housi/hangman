module.exports = angular.module('game', [])
  .service('gameService', require('./gameService'))
  .controller('gameController', require('./gameController'))
  .component('game', {
    controller: 'gameController as vm',
    templateUrl: 'game/game.html'
  });
