// Question 144: Explain the use of the Promise.all() method with an example.

const promise1 = 13;
const promise2 = Promise.resolve(10);

Promise.all([promise1,promise2]).then((result) => console.log(result))
