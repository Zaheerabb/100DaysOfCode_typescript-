// Question 135: Explain how you can format a JSON string with proper indentation for readability.

let obj = {
    name: "zaheer",
    city: "karachi",
    favColor: "black"
}

// JSON.stringify(value[, replacer[, space]])
// You can pass nearly any character or combination of characters as the 'space' argument:

let jsonstr = JSON.stringify(obj,null,"..");

console.log(jsonstr);
/*
OUTPUT:
{
    .."name": "zaheer",  
    .."city": "karachi", 
    .."favColor": "black"
}
*/

