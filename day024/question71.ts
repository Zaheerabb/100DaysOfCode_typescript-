/*
Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. 
Try to reassign a const-declared variable and catch the error.
*/
let name1 = "zaheer";
name1 = "abdullah";
console.log(name1);

const name2 = "zaheer";
try {
    name2 = "abdullah";
} catch (error) {
    console.log("Cannot assign to name2 because it is a constant.");
}
