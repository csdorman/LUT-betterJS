document.getElementById("app").innerHTML = `
    <h1>Hello Parcel!</h1>
    <div>
        Look here for more information about Parcel
    </div>
`;
/*
Benefits of Smaller Functions
 */

const cart = [10, 5, 15] // value of items in cart

// If you have a single parameter, you can use NO parenthesis in arrow function
const fakeAPICharge = total => true //simulates API call (to Stripe or similar). Always returns true here.
const fakeSendReceipt = total => true //simulates sending a receipt email. Always returns true here

// This is NOT a great function - very untestable
// Doesn't test if total is correct, if subtotal correct, if email goes through, etc.
// Too much is going on within a single function
/*
const checkout = cart => {
    let total = reduce((tempTotal, item) => tempTotal + item)
    total = total + 10
    const orderSuccess = fakeAPICharge(total)
    if (orderSuccess) {
        fakeSendReceipt({
            email: "norealemail@gmail.com",
            total
        })
    }
    return orderSuccess
}
*/

// Better
/*
Remember the functions should only have a SINGLE responsibility.
While functions like "checkout" are necessary, make sure to breakout the smaller "subroutines" into their own function for simplicity and testing.
 */
const SHIPPING_COST = 10
const getSubtotal = cart => cart.reduce((tempTotal, item) => tempTotal + item) // subtotal functionality goes here since it's it's own thing. Now you can test subTotal to make sure it works - simply pass an array of numbers.
const getTotal = subTotal => subTotal + SHIPPING_COST // Add subTotal value and shipping. Also easily testable.
const sendReceipt = ({email, total}) => fakeSendReceipt({
    email,
    total,
})



const checkout = cart => {
    const subTotal = getSubtotal(cart) //move subTotal functionality to own function, clear variable name
    const total = getTotal(subTotal) // move total functionality to its own function.
    const orderSuccess = fakeAPICharge(total)
    if (orderSuccess) {
        sendReceipt({email: "fakeemail@gmail.com", total}) //move sendReceipt to its own function
    }
    return orderSuccess
}


checkout(cart)