/*
Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and 
assign an initial value. Then, update its value within the same function and log both the initial and updated 
values.
*/

function updateValue() {
    let num1:number = 3;  // initializing num1 value
    console.log(`initial: `,num1);

    num1 = 5;  // updating num1 value
    console.log(`updated: `,num1);
}
updateValue();
