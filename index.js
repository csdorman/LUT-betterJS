
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
