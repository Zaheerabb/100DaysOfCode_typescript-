// Question 137: Implement a try-catch block to handle potential errors in a block of code.
let a = 6;
try {
    if (a == 5) {
        console.log(`a is`,a);
    } else {
        throw new Error("a is not equal to 5");
    }
} catch (error) {
    console.log(error.message);
}