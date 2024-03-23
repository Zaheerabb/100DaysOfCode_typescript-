/*
Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns 
both the quotient and the remainder. Use an object to return both values.
*/

function div(num1:number,num2:number) {
    let quotient = num1 / num2;
    let remainder = num1 % num2;

    return {quotient,remainder};
}

console.log(div(9,2));