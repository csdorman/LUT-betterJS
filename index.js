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

//Resume at 4:15
console.log(dev)


