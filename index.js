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
console.log(document.URL) //returns the URL of the document

// A Method can be run to make things
const headingFour = document.createElement("h4")
headingFour.innerHTML = "<span>This is coming from inside the DOM! at </span> " + document.URL
console.log(headingFour) // <h4><span>This is coming from inside the DOM!</span></h4>
document.body.appendChild(headingFour)
