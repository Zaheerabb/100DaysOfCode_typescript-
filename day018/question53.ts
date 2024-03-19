/*
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that 
shows what a computer programmer knows, like coding languages, tools, and software frameworks. 
Find a way to get three specific skills from this list and show them.
*/

// creating list inside a list
let nestedObject = {
    languages: ["C","C++","Typescript"],
    frameworks: ["django","electron","ditnet"],
    tools: ["docker","webpack","git"],
}

// getting values from that list
console.log(`languages ${nestedObject.languages[1]},Frameworks ${nestedObject.frameworks[2]},
tools ${nestedObject.tools[0]}`)