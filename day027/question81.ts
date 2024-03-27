/*
Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs 
all of its properties and values.
*/
// creating a fucntion that iterate over object
function iterateObj(name:object) {
    for (let i in name ) {
        console.log(name[i]);
    }
}
// car object
let car: {make: string,model: string,year:number,[key:string]:any} = {
    make: "Honda",
    model: "civic",
    year:2020
};
iterateObj(car)