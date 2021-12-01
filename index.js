document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;

//Destructuring

// Assigning multiple values to variables in a single line
const [a, b] = ["Hi.", "Colin"]
console.log(a)
console.log(b)
/*
This is shorthand for:
const newArray = ["Hi.", "Colin"]
const a = newArray[0]
const b = newArray[1]
 */
const newArray2 = ["Hi", "Colin", "newItem1", "newItem2"]
// Assign first two items to variables, and do something else with the remainder
const [c, d, ...e] = newArray2 //c = string, d = string, e = array
console.log(c, d, e)
console.log(newArray2)

const sayHi = () => console.log("Hey there.")

sayHi()

// Object Destructuring

// Creating objects
// const person = {
//     name: "Colin",
//     age: 39,
//     job1: "Musician",
//     job2: "WebDev",
//     hobby: "Guitar"
// }

//The OLD way to write a function to create an object:
// const makePerson = (name, age, job1) => {
//     return {
//         name: name,
//         age: age,
//         job1: job1
//     }
// }

// New way allows you to omit property and value name IF they are the same
const makePerson = (name, age, job1) => {
    return {
        name,
        age,
        job1
    }
}
//console.log(makePerson("colin",  39, "musician"))


const dev = makePerson("john", 33, "developer")
console.log(dev)
// Old way to get specific data out of object
// These are confusing since they involve creating new variables or re-naming items that already have names
// const name = dev.name
// const devName = dev.name

//Easier way:
const {name} = dev
console.log(name)
/*
You can also pull out multiple items from the object:
const {name, age} = dev
console.log(name, age) // john, 33

Or you can use the spread operator (...rest)
const {name, ...rest} = dev
console.log(name, rest) // john, {age: 33, job1: "developer"}
 */

