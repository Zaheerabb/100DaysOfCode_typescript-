// Question 127: Convert a traditional function expression to an arrow function.

function traditionalFunction(num1:number,num2:number) {
    return num1 + num2;
}

let arrow = (num1:number,num2:number) => num1 + num2;

console.log(traditionalFunction(3,5));
console.log(arrow(3,5));

