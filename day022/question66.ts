/*
Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. 
It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) 
should be false.
*/

function check_AND_OR(val1:boolean,val2:boolean) {
    if (val1 && val2) {
        return true
    }
    else {
        return false
    }
}
console.log(check_AND_OR(true,false));