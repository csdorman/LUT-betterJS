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
- In general, you want to use things that can't (or won't) change the data

 */

// This isn't *bad*, but it is brittle
// This uses the *same variable name* "name" for *different data* (first vs. full name)
// let name = "Steve" //first name
// name = name + " Smithers" //adding a last name
// console.log(name) //Steve Smithers

//Better
// When the data content changes, the variable name *also* changes
const name = "Steve"
const fullName = name + " Smithers"
console.log(name)

// RESUME: 5:20

const BASE_SALARY = 16000
const SALARY_MULTIPLIER = 4

// "ytd" would need a comment or other annotation to make sure its meaning is clear
const ytd = 100000
const salesYearToDate = 100000

const makePerson = ({firstName, lastName, age, job}) => {
    return {
        name: firstName + ' ' + lastName,
        age,
        job,
        salary: BASE_SALARY * SALARY_MULTIPLIER,
    }
}

const dev = makePerson({
    firstName: "Colin",
    lastName: "Dorman",
    age: 39,
    job: "Musician",
})

const hireDev = ({ dev }) => {
    const hiredDev = {
        hired: true,
        ...dev
    }
    return hiredDev
}
console.log(hireDev({dev}))