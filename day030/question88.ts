/*
Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and 
returns the number rounded to the nearest integer.
*/

function nearestInt(num:number) {
    return Math.round(num);
}

console.log(nearestInt(55.6));
