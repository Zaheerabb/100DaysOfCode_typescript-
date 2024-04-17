// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

const msgProm = new Promise<string>((msg) => {
    setTimeout(() => {
        msg("Hello world")
    }, 3000); // delay 3 sec
})

msgProm.then((messg) => console.log(messg));