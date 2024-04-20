// Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Before delay");

function delayBySeconds(sec) {
setTimeout(() => {
    console.log("hello");
}, sec*1000);
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");
