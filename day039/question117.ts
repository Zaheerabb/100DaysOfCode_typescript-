/*
Question 117: Implement a switch statement that evaluates an expression and uses the default case if 
none of the cases match.
*/

function days(num:number) {
    switch (num) {
        case 1:
            return "monday"
            break;
    
        case 2:
            return "tuesday"
            break;
    
        default:
            return "invalid day number"
            break;
    }
}
console.log(days(4));
