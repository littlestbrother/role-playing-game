export class Wizard {
    constructor(name, intelligence, strength, magic, level, hp) {
      this.name = name;
      this.intelligence = 10;
      this.strength = 2;
      this.magic = 10;
      this.level = 1;
      this.hp = 100;
    }

  }

  let levelUp = function() {
    this.intelligence =+1;
    this.strength =+1;
    this.magic =+1;
    this.level =+1;
    this.hp =+1;
  }