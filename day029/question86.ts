/*
Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present 
in a given string. It should return true if found, otherwise false.
*/
function checks(str:string) {
    if (str.includes("Javascript")) {
        return true
    } else {
        return false
    }
}
console.log(checks("Javascript used in webdev"));
