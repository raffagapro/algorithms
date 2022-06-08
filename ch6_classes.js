class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.score = 0;
    }
    intro() {
        console.log(`Hello, I am ${this.name}, I'm a ${this.type}`);
    }
    updateScore() {
        this.score++;
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`${this.name} is playing with a ${this.type}`);
    }
    getScore() {
        console.log(`My score is ${this.score}`);
    }
}

const player1 = new Wizard('Chris', 'Healer');
player1.play();
player1.intro();
player1.updateScore();
player1.getScore();