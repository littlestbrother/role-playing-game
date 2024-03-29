export class Player {
    //create Player object
    constructor(name, intelligence, strength, magic, level, hp) {
        this.name = name;
        this.intelligence = intelligence;
        this.strength = strength;
        this.magic = magic;
        this.level = level;
        this.hp = hp;
    }

    //method to levelUp()
    levelUp() {
        this.intelligence += 1;
        this.strength += 1;
        this.magic += 1;
        this.level += 1;
        this.hp += 1;
    }
}

//create Wizard object
export class Wizard extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name, 10, 2, 10, 1, 90);
    }

}

//create Samurai object
export class Samurai extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name, 10, 10, 0, 1, 100);
    }

}

//create Ninja object
export class Ninja extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name, 10, 3, 2, 1, 90);
    }

}

//create VinDiesel object
export class VinDiesel extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name, 20, 20, 20, 20, 200);
    }

}

//create Warrior object
export class Warrior extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name, 5, 5, 0, 1, 90);
    }

}


export class Enemy {
    constructor(intelligence, strength, level, hp) {
        this.intelligence = intelligence * 2;
        this.strength = strength * 2;
        this.hp = hp * 2;
        this.level = level;
    }

    levelUp(){
        this.intelligence += 1;
        this.strength += 1;
        this.level += 1;
        this.hp += 1;
    }
}

//for player:
//whoever has the highest intelligence score goes first
//your strength minus enemies hp if you win rock paper scissors
//hp + magic, uses

//enemy:
//level * strength - hp 

//additional:
//random chance you get a crit-