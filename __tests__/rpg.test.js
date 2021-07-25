import { TestScheduler } from 'jest';
import { Wizard } from './../src/rpg.js';

describe('Wizard', () => {
    test('should create Wizard class', () => {
        let character = new Wizard('Marni');
        expect(character.name).toEqual('Marni');
        expect(character.intelligence).toEqual(10);
        expect(character.strength).toEqual(2);
        expect(character.magic).toEqual(10);
        expect(character.level).toEqual(1);
        expect(character.hp).toEqual(100);

    });

});