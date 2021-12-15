/*
Promises
 */

// sample "import" from Stripe (charging a credit card)

// Will return "null"

// const chargeCard = () => null


// JS doesn't always run top to bottom - in order to control the flow of some info you may need a LOT of callbacks
// CALLBACK HELL!!!!!
/*
chargeCard('12341234123', (result) => {
    // callback 1 - do something
    saveToDb(result, () => {
        //callback 2 - do something else
    })
})
*/

// In order to do some things (like fetch from an API) you want code that will run asynchronously.
// You can either use callback functions (as above) or a PROMISE
// A "promise" in JS is the same as a promise in real life - if someone promises you $10, they haven't given you money, but they have said that they will give you the money at a future date.
// Many API calls return promises

const chargeCard = () => new Promise((resolve, reject)  => {
    // card is valid
    if (true) {
        return resolve(true)
    }
    return resolve(false) // This isn't "rejecting", this is just resolving to false (IE credit card number was incorrect and the charge didn't go through
    reject("FAIL FAIL")
})

console.log(chargeCard())

// Once the promise returns data
chargeCard().then((val) => {
    console.log(val)
}).catch((err) => { //.catch if the Promise fails
    console.log(err)
})

