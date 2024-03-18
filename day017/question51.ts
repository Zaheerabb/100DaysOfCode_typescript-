/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates 
the area of a rectangle and refactor it into an arrow function.
*/

// creating simple function
function simpleFunction(width:number,height:number):number {
    return height *width;
}

// creating arrow function
let arrowFun = (width:number, height:number): number =>
height * width;

// printing both functions
console.log(`this is simple functions output ${simpleFunction(5,10)}`)
console.log(`this is arrow functions output ${arrowFun(5,10)}`)