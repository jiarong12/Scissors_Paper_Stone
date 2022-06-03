var player = 0;
var comPlayer = 0;
var draw = 0;
var username = ``;

// random number generator
var randomNum = function( max ){
  return Math.floor( Math.random() * max ) + 1 ;
}
var REPLAY_INSTRUCTIONS =
  'Now you can type "scissors" "paper" or "stone" to play another round!';

// computer random generate output
var comOutput = function(){
  var numOfPlays = 3 ;
  var num = randomNum( numOfPlays ) ;
  if ( num == 1 ){
    return 'scissors' ;
  }
  if( num == 2 ){
    return 'paper' ;
  }
  return 'stone' ;
}

var gameOutcome = function( player , com ){
  if ( player == com ){
    draw += 1;
    return 'Draw!' ;
  }
  if (( player == 'stone' && com == 'scissors') || ( player == 'scissors' && com == 'paper' ) || ( player == 'paper' && com == 'stone' )){
    player += 1;
    return 'You Win!' ;
  }
  else{
    comPlayer += 1 ;
    return "You Lose!";
  }
  
}

var validityCheck = function ( input ){
  if ( input == 'stone' || input == 'scissors' || input == 'paper'){
    return 1 ;
  }
  return 0 ;
}

var game = function( input ){
  var check = validityCheck( input ) ;
  if ( check == 0 ){
    return 'Invalid input! Please key in (scissors/stone/paper)';
  }
  var com = comOutput() ;
  return `Computer chose ${com} <br><br> You chose ${input} <br></br> ${gameOutcome( input , com )} <br><br> ${REPLAY_INSTRUCTIONS}` ; 
}

var main = function (input) {
  return game(input);
};