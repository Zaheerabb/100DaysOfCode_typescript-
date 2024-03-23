/*
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a 
string that represents a number (e.g., "5"). Return their sum as a number. 
*/

function add(num1:number,str:string) {
    return num1+Number(str);
}
console.log(add(5,"5"));
