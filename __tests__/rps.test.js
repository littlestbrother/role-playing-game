import contest from '../src/battle.js'


describe('rock paper scissors', () => {
    test('should test if choose routes return properly', () => {
        // 0 = rock, 1 = paper, 2 = scissor
        let playerTurn = 2;
        let enemyTurn = 0;
        expect(contest(playerTurn,enemyTurn)).toEqual(false);
    });
});
