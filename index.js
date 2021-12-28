
/*
Async - IIFE

IIFE = Immediately Invoked Function Expression
    A function that basically calls itself.
*/

// IIFE format
//(function(){

(async () => { // This one uses async to enable async within the function

// This is more readable than trying to do this all in one const
    try{
        const SEARCH_QUERY = 'Javascript'
        const SEARCH_URL = "https://openlibrary.org/search.json?q="
        const API_URL = `${SEARCH_URL}${SEARCH_QUERY}` // Using backticks for string concatenation

        const res = await fetch(API_URL)
        const data = await res.json()

        console.log(data)
    } catch (error) {
        console.error(error.message)
    }



})() //this extra set of parens is IMPORTANT
