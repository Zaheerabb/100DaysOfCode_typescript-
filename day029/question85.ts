/* 
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the 
word "code" within any given string and returns its position.
*/
// creating a function that take string and return index of code in that string
function indx(str:string) {
    return str.indexOf("code");
}

let mess:string = "this is my code";
console.log(indx(mess));
