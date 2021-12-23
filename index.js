
/*
Classes

A "thing".

When you "extend" a class you get all the things in the original class PLUS whatever is added in the extension.
 */

class Team {
    constructor(name) {
        this.name = name
    }
    celebrate() {
        console.log("We won! Woohoo!")
    }
}

// Extending Team
// If there is a constructor in the subclass, you must call super before using "this"
class F1Team extends Team{
    constructor(name) {
        super(name)
        this.type = "Formula 1"
    }
    winRace() {
        console.log("Hamilton wins!!!")
    }
}

class FootballTeam extends Team {
    constructor(name) {
        super(name);
        this.type = "Football (American)"
    }
    touchdown() {
        console.log("TOUCHDOWN!!!")
    }
}


/* A standalone class
class F1Team {
    constructor(name) { // constructor runs when class is created. Params are passed through the constructor (not class)
        this.name = name
        this.type = "Formula 1"
    }
    winRace() {
        console.log("Hamilton Wins! (again)")
    }
}
*/

const mercedes = new F1Team("Mercedes F1")

console.log(mercedes.name) // Mercedes F1
mercedes.winRace() // Hamilton wins! (again)
console.log(mercedes) // logs the entire object

const alabama = new FootballTeam("University of Alabama")
console.log(alabama.name) // University of Alabama
alabama.touchdown() // TOUCHDOWN!!!
console.log(alabama) // logs the entire object
//alabama.winRace() // this doesn't work!

mercedes.celebrate() //Both of these work (the function is on the parent constructor
alabama.celebrate()