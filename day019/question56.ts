/*
Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that 
has only the words.
*/

let differentTypesOfItems:any[] = ["hello",5,"samad",true,"amir"];
let wordsList:string[] = [];

differentTypesOfItems.map(items => {
    if (typeof items == "string") {
        wordsList.push(items);
    }
}) 

console.log(wordsList);