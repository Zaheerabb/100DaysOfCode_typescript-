// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

export function multiply(...num:number[]) {
    return num.reduce((Total,a) => Total * a, 1);
}

// export x;