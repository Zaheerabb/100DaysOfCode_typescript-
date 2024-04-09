// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function number1_7(num:number) {
    switch (num) {
        case 1:
            return "monday"
            break;
        case 2:
            return "tuesday"
            break;
        case 3:
            return "wednesday"
            break;
        case 4:
            return "thursday"
            break;
        case 5:
            return "friday"
            break;
        case 6:
            return "saturday"
            break;
        case 7:
            return "sunday"
            break;
        default:
            return "Invalid number"
            break;
    }
}
console.log(number1_7(7));