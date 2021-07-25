import { TestScheduler } from 'jest';
import { Wizard, Player, Samurai, VinDiesel, Ninja, Warrior } from './../src/rpg.js';

describe('Wizard', () => {
    test('should create Wizard class', () => {
        let character = new Wizard('Harry Potter');
        expect(character.name).toEqual('Harry Potter');
        expect(character.intelligence).toEqual(10);
        expect(character.strength).toEqual(2);
        expect(character.magic).toEqual(10);
        expect(character.level).toEqual(1);
        expect(character.hp).toEqual(90);

    });
  });
  describe('Samurai', () => {
    test('should create Samurai class', () => {
        let character = new Samurai('Tom Cruise');
        expect(character.name).toEqual('Tom Cruise');
        expect(character.intelligence).toEqual(10);
        expect(character.strength).toEqual(10);
        expect(character.magic).toEqual(0);
        expect(character.level).toEqual(1);
        expect(character.hp).toEqual(100);

    });
  });
  describe('Vin Diesel', () => {
    test('should create Vin Diesel obj', () => {
        let character = new VinDiesel('Vin Diesel');
        expect(character.name).toEqual('Vin Diesel');
        expect(character.intelligence).toEqual(20);
        expect(character.strength).toEqual(20);
        expect(character.magic).toEqual(20);
        expect(character.level).toEqual(20);
        expect(character.hp).toEqual(200);

    });
  });
  describe('Ninja', () => {
    test('should create Ninja class', () => {
        let character = new Ninja('Michelangelo');
        expect(character.name).toEqual('Michelangelo');
        expect(character.intelligence).toEqual(10);
        expect(character.strength).toEqual(3);
        expect(character.magic).toEqual(2);
        expect(character.level).toEqual(1);
        expect(character.hp).toEqual(90);

    });
  });

  describe('Warrior', () => {
    test('should create Warrior class', () => {
        let character = new Warrior('Mulan');
        expect(character.name).toEqual('Mulan');
        expect(character.intelligence).toEqual(5);
        expect(character.strength).toEqual(5);
        expect(character.magic).toEqual(0);
        expect(character.level).toEqual(1);
        expect(character.hp).toEqual(90);

    });
  });

  //levelUp
  describe('Player', () => {
        test('should level up characters', () => {
        let character = new Warrior('Mulan');
        character.levelUp();
        expect(character.name).toEqual('Mulan');
        expect(character.intelligence).toEqual(6);
        expect(character.strength).toEqual(6);
        expect(character.magic).toEqual(1);
        expect(character.level).toEqual(2);
        expect(character.hp).toEqual(91);
  });


});