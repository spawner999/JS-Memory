var gallery = require('./../js/helper.js').gallery;
var card = require('./../js/helper.js').card;

var Game = function(){
  this.cards = 12;
  this.pairsLeft = 6;
  this.previousCard = '';
};

Game.prototype.createGame = function(){
  $('body').append(gallery);
  for (var i=0; i<6; i++){
    var current = card.replace('%id%', i);
    $('.gallery').append(current);
    $('.gallery').append(current);
  }
}

Game.prototype.turn = function(id1, id2){
  if(id1 === id2) {
    this.pairsLeft -=1
    $('.' + id1).off("click");
  }
  else {
    setTimeout(function() {
      $('.' + id1).find('.card').removeClass('flipped');
      $('.' + id2).find('.card').removeClass('flipped');
    }, 700);
  }
  this.previousCard = '';
}

exports.Game = Game;
