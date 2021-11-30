document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;

// Function declaration
// This is Hoisted - sent to the top when it's run
function sayHi() {
    return console.log("Hello!")
}

// Function expression
// Anonymous function (variable is named, but the function is not)
/*
 If desired, these can be named by:
 const sayHi = function sayHi() {
    return console.log("Hi.")
}
 */
// Not hoisted
// These can be used in-place or passed around

const sayHi1 = function() {
    return console.log("Hi.")
}
// ES6+ Arrow functions (another way to write function expressions)
// The sayHi1 function expression can be rewritten as:
const sayHi2 = () => {
    return console.log("Hey there.")
}
/* Arrow functions allow you omit curly brackets and "return":
const sayHi2 = () => console.log("Hey there.")

These can be easy to read within a callback function
*/


sayHi()
sayHi1()
sayHi2()
