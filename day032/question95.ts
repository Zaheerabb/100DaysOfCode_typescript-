/*
Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/
// creating a function that take a number array and return numbers greater than 10
function greater(numArray:number[]) {
    return numArray.filter(num => num > 10);
}
// array with numbers
let arr: number [] = [10,20,1,2,15,11];

console.log(greater(arr));
