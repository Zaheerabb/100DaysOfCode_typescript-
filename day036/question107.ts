//Question 107: Write a condition using logical operators that checks if a number is divisible by 
// both 2 and 3.

function isDiv(num:number) {
    if (num % 2 == 0 && num % 3 == 0) {
        console.log(`${num} is divisible by both 2 and 3`);
        
    } else {
        console.log(`${num} is not divisible by both 2 and 3`);
        
    }
}

isDiv(17);
isDiv(12);