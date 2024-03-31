/*
Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is 
NaN (Not a Number) and return a boolean result.
*/

function checkIsNAN(value:any) {
    return isNaN(value);
}
console.log(checkIsNAN("abc")); // return true because it is a NAN (not a number)
console.log(checkIsNAN(45));  // return false because it is a number
