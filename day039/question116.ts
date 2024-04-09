// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

function monthNumber(num:number) {
    switch (num) {
        case 12:
        case 1:
        case 2:
            return "winter"
            break;

        case 3:
        case 4:
        case 5:
            return "spring"
            break;

        case 6:
        case 7:
        case 8:
            return "summer"
            break;

        case 9:
        case 10:
        case 11:
            return "fall"
            break;
            
        default:
            return "invalid month number"
            break;
    }
}
console.log(monthNumber(6));
