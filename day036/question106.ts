//  Question 106: Determine if a given year is a leap year using comparison operators.

function isLeapYear(num:number) {
    if (num % 4 == 0) {
        console.log(`${num} is a leap year`);
    } else {
        console.log(`${num} is not a leap year`);
    }
}
isLeapYear(2004)

isLeapYear(2005)