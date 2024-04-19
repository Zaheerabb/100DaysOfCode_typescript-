// Question 146: Show an example of a callback function used to filter an array of numbers.

let numArray = [5,4,3,-5,-7,6,-1]

let numFilter = numArray.filter((negNum => negNum < 0))

console.log(numFilter);
