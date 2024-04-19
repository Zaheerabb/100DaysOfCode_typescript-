// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function logMsg(num:number) {
    console.log(num);
}

function add(num1:number,num2:number,myCallBack) {
    const sum = num1 + num2
    myCallBack(sum)
}

add(5,3,logMsg);