import SEARCH_URL from "./consts"; // Since this was the default export, you can change "SEARCH_URL" here and it won't break (as long as you rename it in the code below)
import { SEARCH_QUERY } from "./consts"; // This name cannot be changed, since it is not a default export
import { SAMPLE_EXPORT as SAMPLE} from "./consts"; // You can rename imports like this

/*
Import Export Modules
*/

console.log(SAMPLE)

(async () => {

// This is more readable than trying to do this all in one const
    try{


        const API_URL = `${SEARCH_URL}${SEARCH_QUERY}` // Using backticks for string concatenation

        const res = await fetch(API_URL)
        const data = await res.json()

        console.log(data)
    } catch (error) {
        console.error(error.message)
    }



})() //this extra set of parens is IMPORTANT
