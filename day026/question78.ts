/*
Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations 
by creating one of each that performs the same task, such as squaring a number.
*/
// function declarations
function squaring(num1:number) {
    return num1 * num1;
}
console.log(squaring(5));

// function expressions
let  square = function(num1:number) {
    return num1 * num1;
}
console.log(squaring(5));

