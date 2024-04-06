// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grades(percentage:number) {
    let grade = "";
    if (percentage >= 80 && percentage <= 100) {
        grade = "A";
    }
    else if (percentage >= 70 && percentage < 80) {
        grade = "B";
    }
    else if (percentage >= 60 && percentage < 70) {
        grade = "C";
    }
    else if (percentage >= 50 && percentage < 60) {
        grade = "D";
    }
    else if (percentage >= 0 && percentage < 50) {
        grade = "Fail";
    }
    return grade;
}

console.log(grades(55));
