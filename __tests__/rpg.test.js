import { TestScheduler } from 'jest';
import { Wizard, Player, Samurai, VinDiesel, Ninja, Warrior, Enemy } from './../src/rpg.js';

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


  describe('Enemy', () => {
    test('should create Enemy class', () => {
        let enemy = new Enemy(2,3,1,40);
        expect(enemy.intelligence).toEqual(4);
        expect(enemy.strength).toEqual(6);
        expect(enemy.level).toEqual(1);
        expect(enemy.hp).toEqual(80);
    });
  });

});

describe('Enemy level up', () => {
  test('should level up Enemy class', () => {
      let enemy = new Enemy(2,3,1,40);
      enemy.levelUp();
      expect(enemy.intelligence).toEqual(5);
      expect(enemy.strength).toEqual(7);
      expect(enemy.level).toEqual(2);
      expect(enemy.hp).toEqual(81);
  });
});