export function fight(player, enemy, playerTurn, enemyTurn) {
    //check to add buff to player
    if (player.intelligence >= enemy.intelligence) {
        player.strength += player.intelligence;
    }
    //check if player is dead
    if (player.hp <= 0) {
        console.log('you lose');
    }
    //check if enemy is dead
    else if (enemy.hp <= 0) {
        player.levelUp();
        console.log('you win! you level up to: ' + player.level);
    }
    //compare turn outcome and subtract hp accordingly
    if (contest(playerTurn, enemyTurn) == true) {
        enemy.hp -= player.strength;
    }
    else if (contest(playerTurn, enemyTurn) == false) {
        player.hp -= enemy.strength;
    }
}


// 0 = rock, 1 = paper, 2 = scissor
export function contest(playerTurn, enemyTurn) {
    if ((playerTurn == 0 && enemyTurn == 1) || (playerTurn === 2 && enemyTurn === 0) || (playerTurn === 1 && enemyTurn === 2)) {
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

