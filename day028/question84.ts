/*
Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all 
instances of the word "JavaScript" with "TypeScript".
*/
// function that replace words
function replaces(sentence:string) {
    // spliting sentence into words
    let words = sentence.split(' ');
    // create variable where we add words
    let sen:string = " ";
    // iterating over sentence
    for (let i = 0; i < words.length; i++) {
        // if word is javascript then replace it with typescript 
        if (words[i].toLowerCase() == "javascript") {
            words[i] = "Typescript";
            // add word to sen
            sen += words[i] + " ";
        } else {
            // if word is not javascript then simply add that word to sen
            sen += words[i] + " ";
        }
    }
    // returning sen
return sen;
}

console.log(replaces("Javascript is my favourite language"));
