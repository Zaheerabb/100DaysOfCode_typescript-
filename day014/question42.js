"use strict";
/*
Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
let magicianNames = ["zaheer", "abdul", "jane"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
// creating a function that takes string and print that string 
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `Great ${magician[i]}`;
    }
}
make_great(magicianNames);
show_magicians(magicianNames);
