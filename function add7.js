function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function computerPlay() {
  let num = getRandomInt(3);
  return num;
}

function playersChoice() {
  let choice = prompt("Choose!");
  choice = choice.toUpperCase();
  
  switch (choice) {
    case "ROCK": return 0;
    case "PAPER": return 1;
    case "SCISSORS": return 2;
  }
}

function playRound(computerPlay, playersChoice) {
  let computer = computerPlay;
  let player = playersChoice;

  switch (computer) {
    case 0:
      switch (player) {
        case 0: return "tie"
        case 1: return "win"
        case 2: return "lose"
      }
      break;
    case 1:
      switch (player) {
        case 0: return "win"
        case 1: return "tie"
        case 2: return "lose"
      }
      break;
    case 2:
      switch (player) {
        case 0: return "win"
        case 1: return "lose"
        case 2: return "tie"
      }
      break;

  }
}

function game(){
  for (let i = 0; i < 5; i++) {
     console.log(playRound(computerPlay(),playersChoice()));
    
  }
}
game()
