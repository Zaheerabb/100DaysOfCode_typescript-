/*
Question 58: Average Score Calculator: Write a simple program that can take lots of scores 
and find their average.
*/
let score = 0;
// creating a function that take numbers and give avg of those numbers
function avg(...scores:number[]) {
    // sum those numbers
    for (let i = 0; i < scores.length; i++) {
        score += scores[i];
    }
    // return average
    return score/scores.length;
}

console.log(avg(39,69,45))