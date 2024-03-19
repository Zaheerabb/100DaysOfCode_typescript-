/*
Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
Include its brand, model, and other key features like how much storage it has, the size of its screen, 
and how long its battery lasts.
*/
// creating object and nesting in that object
let smartphone = {
    brand: "iphone",
    model: "iphone 15",
    specs: {
        storage: 256,
        screenSize: 6.5,
        batteryLongLast: "15 hours"
    }
}
// showing that object
console.log(smartphone);