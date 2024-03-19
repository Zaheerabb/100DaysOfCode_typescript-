/*
Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new 
list where each number is twice its original value.
*/
// declearing array
let originalNumbers: number[] = [2,3,5,7];
let doubledNumbers:number[] = [];

// iterate over each element of array and double its value
for (let i = 0; i < originalNumbers.length; i++) {
    doubledNumbers.push(originalNumbers[i]*2);
}
// showing original and doubled array
console.log(originalNumbers);
console.log(doubledNumbers);