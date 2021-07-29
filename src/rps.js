// 0 = rock, 1 = paper, 2 = scissor

// let enemyTurn = moves[random()];
// let playerTurn = moves[choose(choice)];

export default function contest(playerTurn, enemyTurn) {
    if ((playerTurn == 0 && enemyTurn == 1) || (playerTurn === 2 && enemyTurn === 0) || (playerTurn === 1 && enemyTurn === 2)){
        return false//false means player loses
    }
    else if ((playerTurn === 1 && enemyTurn === 0) || (playerTurn === 0 && enemyTurn === 2) || (playerTurn === 2 && enemyTurn === 1)) {
        return true //player wins
    }
    else if ((playerTurn === 1 && enemyTurn === 1) || (playerTurn === 0 && enemyTurn === 0) || (playerTurn === 2 && enemyTurn === 2)) {
        choose(); //player chooses again
    } 
    else {
      return 'Invalid Choice';
    }
}