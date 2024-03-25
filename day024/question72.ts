/*
Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
*/
//creating block scope
{
    let name1 = "zaheer";
    const age = 20;
}

try {
    console.log(name1);
} catch (error)
 {
    console.log("Can't acces name1 from block");
}

try {
    console.log(age);
} catch (error) {
    console.log("Can't acces age from block");   
}
