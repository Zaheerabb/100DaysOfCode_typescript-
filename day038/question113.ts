/*
Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the 
capital if it exists.
*/

let countryCap = new Map<string, string>();

countryCap.set("pakistan","Islamabad")
countryCap.set("france","paris")
countryCap.set("Bangladesh","Dhaka")
countryCap.set("canada","Ottawa")

if (countryCap.has("canada")) {
    console.log(countryCap.get("canada"));
}
