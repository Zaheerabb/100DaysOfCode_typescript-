/*
Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with 
variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
*/
// creating a function that swap values
function swap(a:number | string,b:number | string) {
    let tmp:number | string; // creating a temprory variable
    tmp = a
    a = b;
    b = tmp;
    return {a,b}
}

let a = 5;
let b = 10;
console.log(swap(a,b));
