document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;
/*
Naming Things
 */

const makePerson = ({firstName, lastName, age, job}) => {
    return {
        name: firstName + ' ' + lastName,
        age,
        job,
    }
}

const dev = makePerson({
    firstName: "Colin",
    lastName: "Dorman",
    age: 39,
    job: "Musician",
})
