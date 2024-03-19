/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
*/
let grade1 = 0;
function calculateGrades(grade:number[]) {
    for (let i = 0; i < grade.length; i++) {
        grade1 += grade[i];
    }
    return grade1/grade.length;
}
let grades:number[] = [89,54,73,62];

console.log(calculateGrades(grades));
