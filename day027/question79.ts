/*
Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties 
for make, model, and year. Then, show how you can access the model property of the car.
*/

// creating object
let car:{make:string,model:string,year:number} = {
    make: "honda",
    model: "civic",
    year: 2020
}
// accessing model of object car
console.log(car.model);

