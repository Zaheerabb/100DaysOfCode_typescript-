/*
Question 92: Write a function to remove the last element from an array and return the removed element.
*/

function removeLastElement(str:string[]) {
    return str.pop()
}

let names:string[] = ["zaheer","abbas","amir","fahad"];
console.log(removeLastElement(names));
