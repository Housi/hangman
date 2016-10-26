'use strict'

// @ngInject
function GameController(gameService){

  var vm = this;
  vm.processInput = gameService.processInput;
  vm.retry = loadWord;

  loadWord();

  function loadWord(){
    gameService.getWord().then(function(){
      vm.data = gameService.data;
    });
  }
}

module.exports = GameController;
