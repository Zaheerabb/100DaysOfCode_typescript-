/*
Question 94: Use the .map() method to create a new array that contains the length of each word from 
an array of words.
*/

let wordsArray: string[] = ["apple","orange","banana"]

let lengthOfWords: number[] = wordsArray.map(x => x.length)

console.log(lengthOfWords);
