
/*
This

"this" is used when you want to refer to something *within an object or a class*.

"this" refers to the context that something is executed within.
 */

console.log(this)

const test = {
    name: "test",
    testFunc: function() {
        console.log(this.name)
        console.log(this) // this inside an object method. Returns *both* object methods
        this.name = "Colin"
        console.log(this.name)
    },
    testFuncTwo: () => {
        console.log(this) // this is undefined because of the arrow function - you'll need to use function()
    }
}

// Constructor function
function team() {
    console.log(this)
}

const button = document.getElementById("new-colors")
button.addEventListener("click", function() { // can't use an arrow function, or its undefined
    console.log(this) // refers to the context, the actual button in this case
    this.innerText = "Clicked!" // this will change the text on the button
})

test.testFunc() // returns object and BOTH object methods (testFunc and testFuncTwo)
test.testFuncTwo() // since this uses an arrow function, it's undefined
team() //outputs undefined (or window). Not creating any context.
const football = new team() // creates new constructor which will output "team"