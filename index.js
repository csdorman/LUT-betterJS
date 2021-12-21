
/*
JS Array Methods and Map
 */

/*
 Array.SHIFT removes the first item from the array and returns it. This mutates the array (by changing the length).

 In general, you DO NOT WANT TO MUTATE objects you are working on.

 Enter: Map, Filter, Reduce, (etc.)
 These methods create a new array (with the results of the actions performed). This keeps the original object (data) intact.

 */

const simpleShoppingCart = [10, 20, 25, 5, 10]

const shoppingCart = [
    {
        sku:"1234",
        price: 10,
        type: "t-shirt"
    },
    {
        sku: "1232",
        price: 16,
        type: "tutorial",
    },
    {
        sku: "1324",
        price: 30,
        type: "tutorial"
    }
]

/*
Using .map

Iterates over an array and allows you to perform a function on each item. Returns a new array [IMPORTANT!]
Will always return the same number of items in the away that were given.
 */

// Apply a 25% discout to all items
const discountCart = simpleShoppingCart.map((value) => {
    // The result of this function becomes the new array item.
    return value * .75
})
// This function could be condensed as:
// const discountCart = simpleShoppingCart.map(value => value * .75

console.log(simpleShoppingCart) // returns [ 10, 20, 25, 5, 10 ]
console.log((discountCart)) // returns [ 7.5, 15, 18.75, 3.75, 7.5 ]

// Map also works on an object
const discountShoppingCart = shoppingCart.map((value) => {
    return {
        // Return the current value of the object, and add a new key-value pair
        ...value,
        salePrice: value.price * .75
    }
})
console.log(shoppingCart)
console.log(discountShoppingCart)

/*
 Using .filter

 Iterates over an array, determines what passes through the filter, and returns a new array
 This will return the same or fewer amount of items.
 */

// Group items that are $10 or less.
const filteredSimpleCart = simpleShoppingCart.filter(value => {
    return value <= 10
})

console.log(simpleShoppingCart)
console.log(filteredSimpleCart)

const filteredCart = shoppingCart.filter((product) => {
    return product.type === "tutorial"
})

// You can also use destructuring:
const filteredCartDestruct = shoppingCart.filter(({ type }) => {
    return type === "tutorial"
})

// You can also combine filters.
const filteredCartCombined = shoppingCart.filter((product) => {
    return product.type === "tutorial"
}).filter(product => {
    return product.price > 20
}) // You could also put a .map here (for a discount, for example)

console.log(shoppingCart)
console.log(filteredCart)
console.log('w/Destructuring', filteredCartDestruct)
console.log("Chained filters", filteredCartCombined)

/*
Using .reduce

Iterates over an array and uses values to output a SINGLE value.
 */

const total = simpleShoppingCart.reduce((total, currentPrice) => {
    return total + currentPrice
})

console.log(total)

/*
Array.prototype.every

Iterates over every item in an array and returns a SINGLE true or false value based on a test you provide.
 */

/*
Array.prototype.some

Lets you know if some (1 or more) items pass a test (that you provide)
 */

/*
Array.prototype.forEach

Executes a provided function for each array element. It DOES NOT return anything (unlike .map). It just executes something for each item in the array.
 */

/*
Array.prototype.reverse

The easiest way to reverse an array. But it IS destructive - it changes the original array. You can create a new array and reverse it to preserve the original array.
 */

console.log([...simpleShoppingCart].reverse()) // A reversed version of simpleShoppingCart
console.log(simpleShoppingCart) // But the original is still there.

