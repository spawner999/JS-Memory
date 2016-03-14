var Game = require('./../js/game.js').Game;


$(document).ready(function() {
    $('#newgame').submit(function(event){
      event.preventDefault();
      console.log('loal');
      var memory = new Game();
      memory.createGame();
      // memory.playGame();
      $('.memory').click(function(){
        $(this).find('.card').addClass('flipped')
        if(memory.previousCard === ''){
          memory.previousCard = $(this).attr('class').split(' ')[1];
        }
        else {
          memory.turn(memory.previousCard, $(this).attr('class').split(' ')[1]);
        }
        return false;
      });
    })

})
