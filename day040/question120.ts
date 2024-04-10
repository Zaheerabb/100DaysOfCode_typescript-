//  Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

let movies = ["john wick","titanic","avatar","Dark"];

function iterate(str:string[]) {
    for (const iterator of str) {
        console.log(iterator);
    }
}
iterate(movies)