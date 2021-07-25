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
        this.intelligence +=1;
        this.strength += 1;
        this.magic += 1;
        this.level += 1;
        this.hp += 1;
    }
}

//create Wizard object
export class Wizard extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name,10,2,10,1,90);
    }

}

//create Samurai object
export class Samurai extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name,10,10,0,1,100);
    }

}

//create Ninja object
export class Ninja extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name,10,3,2,1,90);
    }

}

//create VinDiesel object
export class VinDiesel extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name,20,20,20,20,200);
    }

}

//create Warrior object
export class Warrior extends Player {
    constructor(name, intelligence, strength, magic, level, hp) {
        super(name,5,5,0,1,90);
    }

}