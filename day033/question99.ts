/*
Question 99: Generate a date object representing your next birthday and log it to the console.
*/

function birthdaydate(day:number,month:number) {
    let today = new Date();

    let birth = new Date(today.getFullYear(),day,month-1)

    if (today > birth) {
        birth.setFullYear(today.getFullYear() + 1)
    }

    return birth;
}
console.log("Your birthday on:",birthdaydate(1,2).toLocaleDateString());
