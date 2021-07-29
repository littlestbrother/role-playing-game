export let RockPaperScissors = {moves,enemyTurn,playerTurn,choose,contest}

let moves = ['rock', 'paper', 'scissor'];

let enemyTurn = moves[random()];
let playerTurn = moves[choose()];

function choose() {
    if (playerTurn == 'rock') {
        return 0
    }
    else if (playerTurn == 'paper') {
        return 1
    }
    else if (playerTurn == 'scissor') {
        return 2
    } else {
        return 'Invalid Choice'; 
    }
}

function contest() {
    if ((playerTurn == 'rock' && enemyTurn == 'paper') || (playerTurn === 'scissor' && enemyTurn === 'rock') || (playerTurn === 'paper' && enemyTurn === 'scissor')){
        return false//false means player loses
    }
    else if ((playerTurn === 'paper' && enemyTurn === 'rock') || (playerTurn === 'rock' && enemyTurn === 'scissor') || (playerTurn === 'scissor' && enemyTurn === 'paper')) {
        return true //player wins
    }
    else if ((playerTurn === 'paper' && enemyTurn === 'paper') || (playerTurn === 'rock' && enemyTurn === 'rock') || (playerTurn === 'scissor' && enemyTurn === 'scissor')) {
        choose(); //player chooses again
    } 
    else {
      return 'Invalid Choice';
    }
}