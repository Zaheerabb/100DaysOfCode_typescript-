/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
*/

let fruits:string[] = ["apple","banana","orange"];

fruits[fruits.indexOf("banana")] = "mango";

console.log(fruits);
