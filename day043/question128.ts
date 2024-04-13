// Question 128: Create an arrow function that takes multiple parameters and returns the product 
// of all parameters.

let arrowFun = (...a:number[]) => a.reduce((T,num) => T * num);

console.log(arrowFun(3,2,5,6));
