document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;
// Named Parameters

// If you had this function and wanted to add a new parameter (like last name) you would have to edit every instance.
/*
The makePerson and dev const would become:
const makePerson = (name, age, job) => {
    return {
        name,
        age,
        job
    }
}

const dev = makePerson("john", 33, "developer")
*/

const makePerson = (name, lastName, age, job) => {
    return {
        name,
        age,
        job,
        lastName
    }
}

const dev = makePerson("john", "smith", 33, "developer")

// While this is doable, it's a lot of work if you have 10s (or hundreds) of functions.
/*
By wrapping the makePerson parameters in curly brackets you get NAMED PARAMETERS
This lets you use easily insert or replace Object parameters without worrying about the order.
 */

const makePersonWParams = ({name, lastName, age, job}) => {
    return {
        name,
        lastName,
        age,
        job
    }
}

const firstNewPerson = {
    name: "Steve",
    age: 44,
    lastName: "None",
    job: "Busker"
}

/*
You could also call the makePersonWParams function straight from the const
 */
const secondNewPerson = makePersonWParams({
    lastName: "Smithens",
    age: 7,
    job: "dog",
    name: "Ruffle"
})

console.log(makePersonWParams(firstNewPerson))
console.log(secondNewPerson)
// Both of these return objects with the arguments assigned to the correct parameters

console.log(dev)


