/*
Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
*/
// craeting a function that log day,month,year
function currentDate() {
    let today = new Date()

    let day = String(today.getDate()).padStart(2,'0');
    let month = String(today.getMonth() + 1).padStart(2,'0');
    let year = today.getFullYear()

    console.log(day,month,year);
    
}
currentDate();