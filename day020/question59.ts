/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can 
add a specific number to any other number you give them later.
*/

function adder(specialNum:number) {
    return function(num:number) {
        return num+specialNum
    }
}

 let add = adder(6);
console.log(add(10));