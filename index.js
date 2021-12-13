/*
Events addListener vs. Event Methods
 */

// Generate random color
// RGB - 0-255 three numbers
const generateColorValue = () => Math.floor(Math.random() * 256) // generate random number between 0 and 255
// console.log(generateColorValue()) // Test

const createColor = () => {
    const red = generateColorValue()
    const green = generateColorValue()
    const blue = generateColorValue()
    return `rgb(${red}, ${green}, ${blue})` //backticks let us use string interpolation/template strings - JS inside of strings
}
// console.log(createColor()) // Test

// Apply to DOM element
const applyColorToBody = color => {
    return document.body.style.backgroundColor = color
}

// Add color to BG
const addRandomColorToBg = () => {
    const color = createColor()
    return applyColorToBody(color)
}

//Console.log the color value and set BG color
console.log(addRandomColorToBg())

// Update color on click event
const newColors = document.getElementById("new-colors")
// On click lets you attach 1 event to a click. Multiple onclick events will overwrite the previous one.
//newColors.onclick = () => addRandomColorToBg()

// You could also do an event listener, which will run actions whenever an event happens
// Event listeners let you add multiple actions to a single event
newColors.addEventListener('click', addRandomColorToBg)
newColors.addEventListener('click', () => console.log("I see you have found the button"))
newColors.addEventListener('dragstart', () => console.log("HELP ME!!"))
newColors.addEventListener('dragend', () => console.log("I'm going back!"))
document.addEventListener('transitionstart', () => alert("Is this color better?"))