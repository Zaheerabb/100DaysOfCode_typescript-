// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const rndNum = Math.floor(Math.random() * 10)
const X = new Promise<string>((resolve, reject) => {

    if (rndNum > 5) {
        resolve("greater than 5")
    } else {
        reject(new Error("less than 5"))
    }
})

X.then((resolve) => console.log(resolve)).catch((reject) => console.log(reject.message))