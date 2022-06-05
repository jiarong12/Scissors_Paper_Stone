var playerChoice = 0;
var comPlayer = 0;
var draw = 0;
var username = ``;
var option = 0;
var total = 0;
var startGame = false;

var showStats = function () {
  var playerStats = (playerChoice * 100) / total;
  var comStats = (comPlayer * 100) / total;
  var drawStats = (draw * 100) / total;
  return `Win : ${playerStats.toFixed(1)}% <br> Loss : ${comStats.toFixed(
    1
  )}% <br> Draw : ${drawStats.toFixed(1)}% `;
};

// random number generator
var randomNum = function (max) {
  return Math.floor(Math.random() * max) + 1;
};
var REPLAY_INSTRUCTIONS = `Now you can type "scissors" "paper" or "stone" to play another round! <br><br> You can also enter 1 or 2 to change modes! <br><br> Press 'q' to quit!`;

// computer random generate output
var comOutput = function () {
  var numOfPlays = 3;
  var num = randomNum(numOfPlays);
  if (num == 1) {
    return "scissors";
  }
  if (num == 2) {
    return "paper";
  }
  return "stone";
};

var gameOutcome = function (player, com) {
  if (player == com) {
    draw += 1;
    return "Draw!";
  }
  if (
    (player == "stone" && com == "scissors") ||
    (player == "scissors" && com == "paper") ||
    (player == "paper" && com == "stone")
  ) {
    playerChoice += 1;
    return "You Win!";
  } else {
    comPlayer += 1;
    return "You Lose!";
  }
};

var validityCheck = function (input) {
  if (input == "stone" || input == "scissors" || input == "paper") {
    return 1;
  }
  return 0;
};

var game = function (input) {
  var outcome = 0;
  if (username == ``) {
    username = input;
    return `Hi ${username} ! Please press 1 for normal Scissors Paper Stone or 2 for Reversed Scissors Paper Stone`;
  }
  if (input == 1 || input == 2) {
    startGame = true;
    option = input;
    if (option == 1) {
      return `You have chosen normal Scissors Paper Stone <br><br> Please enter either "scissors","paper" or "stone" to begin!`;
    } else {
      return `You have chosen reversed Scissors Paper Stone <br><br> Please enter either "scissors","paper" or "stone" to begin!`;
    }
  }
  if (!startGame) {
    return `Please enter your desired mode of game! '1' or '2' `;
  }
  if (startGame == true) {
    total += 1;
    var check = validityCheck(input);
    if (check == 0) {
      return `Invalid input! Please enter either "scissors","paper" or "stone"`;
    }
    var com = comOutput();
    if (option == 1) {
      outcome = gameOutcome(input, com);
    } else {
      outcome = reversedGame(input, com);
    }

    return `Computer chose ${com} <br><br> You chose ${input} <br></br> ${outcome} <br><br> ${showStats()} <br><br> ${REPLAY_INSTRUCTIONS}`;
  }
};

var reversedGame = function (player, com) {
  if (player == com) {
    draw += 1;
    return "Draw!";
  }
  if (
    (player == "stone" && com == "scissors") ||
    (player == "scissors" && com == "paper") ||
    (player == "paper" && com == "stone")
  ) {
    comPlayer += 1;
    return "You Lose!";
  } else {
    playerChoice += 1;
    return "You Win!";
  }
};

var main = function (input) {
  if (input != "q") {
    return game(input);
  } else {
    return `Thank you for playing!<br><br> This is your win-loss record! <br><br> ${showStats()}`;
  }
};
