/*
Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/
// creating a funtion that returns sum of all numbers in array
function reduce(numArr:number[]) {
   return numArr.reduce((a,b) => a + b, 0);
}

let arr: number[] = [5,4,3,3];

console.log(reduce(arr));
