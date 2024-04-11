// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

let vowels = ["a","e","i","o","u"];

function iterator(str:string) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str.charAt(i) == vowels[j]) {
                return;
            }
        }
        console.log(str.charAt(i));
    }
}
iterator("zhhkelr")