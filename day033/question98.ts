/*
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/

function daysLeft() {
    let today = new Date();

    let newYear = new Date(today.getFullYear() + 1, 0, 1)

    let daysLeft = Math.ceil((newYear.getTime()-today.getTime()) / (1000 *60 *60 *24));

    console.log(daysLeft," Days left");
    
}
daysLeft()