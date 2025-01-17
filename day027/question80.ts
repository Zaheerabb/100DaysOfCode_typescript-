/*
Question 80: Updating Object Properties: Add a property named color to the existing car object, and then 
update the year property to 2021. Show how to perform these operations.
*/
let car: {make: string,model: string,year:number,[key:string]:any} = {
    make: "Honda",
    model: "civic",
    year:2020
};

car.color = "black";
car.year = 2021;

console.log(car);
