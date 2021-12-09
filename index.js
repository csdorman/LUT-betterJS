/*
JS & the DOM (Part 3)
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
// Update color on event