/*
JavaScript & the DOM (+ MDN Docs)
 */

document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
    <div>
    </div>
</div>
`;

// A Property of the DOM - properties can be viewed (or set)
console.log(document.body) //returns the body of the DOM
console.log(document.URL)

// A Method can be run to make things
const headingFour = document.createElement("h4")
headingFour.innerHTML = "<span>This is coming from inside the DOM!</span>"
console.log(headingFour) // <h4><span>This is coming from inside the DOM!</span></h4>
document.body.appendChild(headingFour)


// RESUME at 14:15