/*
Set Interval vs. Set Timeout
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

// setTimeout - happens once
// const log = () => console.log("Is in timeout")
// setTimeout(log, 1000)
//setTimeout(addRandomColorToBg, 5000)

// setInterval happens repeatedly
//setInterval(addRandomColorToBg, 2000)
// In order to interrupt, you need to do this
const interval = setInterval(addRandomColorToBg,2000)
newColors.addEventListener("click", () => clearInterval(interval))