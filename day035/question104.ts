// Question 104: Create a function that generates a random hexadecimal color code.

function hexadecimalClr() {
    let code = '#'

    code += Math.floor(Math.random() * 0xFFFFFF).toString(16);
    
    return code;
}
console.log(hexadecimalClr());

