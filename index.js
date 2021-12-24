
/*
So Fetch

Fetch allows your program to visit an API URL and get some data.
It comes with (most) browsers, so you don't have to have a separate API to use it.

General Fetch syntax
fetch(url).then((result) => {

}).catch((error) => {

})


*/

// This is more readable than trying to do this all in one const
const SEARCH_QUERY = 'Javascript'
const SEARCH_URL = "https://openlibrary.org/search.json?q="
const API_URL = `${SEARCH_URL}${SEARCH_QUERY}` // Using backticks for string concatenation

fetch(API_URL)
    .then((result) => {
        return result.json()
    })
    .then(data => { // since result.json is a promise, it "becomes" the 'data' parameter
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
