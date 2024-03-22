/*
Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
special type alias, including properties unique to each shape.
*/

type alias = {
    shape: "circle" | "rectangle",
    radius?:number,
    width?:number,
    height?:number
}

let circle:alias = {
    shape:"circle",
    radius:50
}

let rectangle:alias = {
    shape:"rectangle",
    width:50,
    height:25,
}

console.log(circle,rectangle);