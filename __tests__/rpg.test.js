import { TestScheduler } from 'jest';
import { Wizard } from './../src/rpg.js';

describe('Wizard', () => {
    test('should create Wizard class', () => {
        let character = new Wizard('Marni');
        expect(character.name).toEqual('Marni');
        expect(character.intelligence).toEqual(0);
        expect(character.strength).toEqual(0);
        expect(character.magic).toEqual(0);
        expect(character.level).toEqual(0);
        expect(character.hp).toEqual(0);

    });

});