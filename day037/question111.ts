// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function ageGroup(age:number) {
    if (age < 13) {
        console.log("child");
    }
    else if (age < 20) {
        console.log("teenager");
    }
    else if (age < 13) {
        console.log("Adult");
    }
}

ageGroup(15);
