/*
Set Invertval vs. Set Timeout
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

//Set BG color
addRandomColorToBg()

// Update color on click event
const newColors = document.getElementById("new-colors")

newColors.addEventListener('click', addRandomColorToBg)
newColors.addEventListener('click', () => console.log("I see you have found the button"))
newColors.addEventListener('dragstart', () => console.log("HELP ME!!"))
newColors.addEventListener('dragend', () => console.log("I'm going back!"))
