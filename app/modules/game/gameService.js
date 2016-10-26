'use strict'

// @ngInject
function gameService($http, $q) {

  var api = 'http://api.wordnik.com/v4/words.json/randomWord';
  var key = 'd3843673a1a5d8b7a967a422d3e006d3d2286931c9fd58dd0';

  var data = {
    missLimit: 11,
  };

  var gameService = this;
  gameService.getWord = getWord;
  gameService.data = data;
  gameService.processInput = processInput;

  function getWord() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: api + '?api_key=' + key + '&maxLength=11'
    })
    .then(function(response) {
      data.currentWord = response.data.word.toLowerCase();
      data.inactive = new Array(11 - data.currentWord.length);
      data.discovered = new Array();
      data.missed = new Array();
      data.progress = 0;
      data.gameOver = false;
      deferred.resolve(data);
    }, function(err){
      deferred.reject();
    });
    return deferred.promise;
  }

  function count(string, letter){
    var re = new RegExp(letter, 'g');
    return string.match(re).length;
  }

  function processInput(input){
    if(!/[^a-zA-Z]/.test(input) & input.length == 1){
      if(data.currentWord.indexOf(input) > -1){
        if(data.discovered.indexOf(input) == -1){
          data.progress = data.progress + count(data.currentWord, input);
          if(data.currentWord.length == data.progress){
            data.gameOver = true;
            data.gameStatus = 'you won';
          };
          data.discovered.push(input);
        }
      } else if(data.missed.indexOf(input) == -1){
        data.missed.push(input);
        if(data.missed.length == data.missLimit){
          data.gameOver = true;
          data.gameStatus = 'game over';
        };
      }
    }
  }
}

module.exports = gameService;
