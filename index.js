document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;
/*
Immutable and Pure Functions

Immutable vs. Mutable
- Can't be vs can be change
- In general, you want to use things that can't (or won't) change the data - immutability is better than mutable

 */

// This isn't *bad*, but it is brittle
// This uses the *same variable name* "name" for *different data* (first vs. full name)
// let name = "Steve" //first name
// name = name + " Smithers" //adding a last name
// console.log(name) //Steve Smithers

/*
BETTER
When the content changes, the variable name also changes.
In general, you should NOT update variables that often - it usually makes more sense to create a NEW variable
 */

const name = "Steve"
const fullName = name + " Smithers"
console.log(name)

/*
PURE FUNCTIONS
- A function that will ALWAYS return the same thing with the same inputs
- Often times code will return different things within the same function based upon EXTERNAL variables - this is not ideal
- This keeps state internal to the function
- Functions should do ONE THING and do it the SAME EVERY TIME
- PURE functions are much easier to test
 */

const addTwo = (x) => x + 2 //this is pure - it will always return the same thing
console.log(addTwo(2))
console.log(addTwo(2))

let multi = 3
const addThree = (x) => x + multi // NOT Pure - uses an external variable that can change
console.log(addThree(2))
multi = 4
console.log(addThree(2))

let mult = 2
const addFour = (x) => { // Also an impure function
    mult += 2  // This function modifies an external state - which will change what it outputs outside of the function
    return x + mult
}
console.log(addFour(2))
console.log(addFour(2))
console.log(addFour(2))
