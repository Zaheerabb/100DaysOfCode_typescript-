// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function isSame(str1:string,str2:string) {
    if (str1.toLowerCase() == str2.toLowerCase()) {
        console.log("Both strings are same");
        
    } else {
        console.log("strings are not same");
        
    }
}

isSame("hello","hello")
isSame("hello","hi")