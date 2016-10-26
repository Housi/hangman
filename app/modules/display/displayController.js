'use strict'

// @ngInject
function displayController(){

  var vm = this;
  vm.arrayHash = arrayHash;

  function arrayHash($index, value) {
    return String($index) + '-' + String(value);
  }
}

module.exports = displayController;
