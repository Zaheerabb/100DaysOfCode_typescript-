/*
Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic
operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) 
on x using compound operators.
*/

function compoundAssignmentOp() {
    let x = 4;
    console.log(`initial: `,x);
    
    x += 2;
    console.log(`after addition: `,x);
    
    x -= 2;
    console.log(`after subtraction: `,x);
    
    x *= 2;
    console.log(`after multiplication: `,x);
    
    x /= 2;
    console.log(`after division: `,x);
}

compoundAssignmentOp();