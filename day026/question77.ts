/*
Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a 
parameter and say hello. If no name is given, it should greet an anonymous user.
*/

// creating a function with default value
function greet(Name:string = "Asif") {
    console.log(`Hello ${Name}`);
}
// calling that function
greet("Ali");