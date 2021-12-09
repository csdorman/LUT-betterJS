/*
Interacting with the DOM
 */

const logo = document.getElementById("logo")
logo.innerText = "Yo yo yo!"

const heading = document.createElement("h1")
heading.innerHTML = "<span>Hello from inside the DOM!</span> " + document.URL
document.body.appendChild(heading)