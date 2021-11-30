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

// Stopped at 6:30
sayHi()