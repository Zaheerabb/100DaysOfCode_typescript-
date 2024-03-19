/*
Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the 
name of each section based on what you need at that moment, like adjusting labels based on user choices.
*/

// create flexible object function to store values in list
function flexibleObject(keys:string,vlaue:string) {
    let list = {}
    list[keys] = vlaue
    return list;
}

// user give his key and value to store it in a list using function and showing that list
console.log(flexibleObject("color","black"));