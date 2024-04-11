// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let x = 10;

while(x != 1){
    if (x == 5) {
        break;
    }
    
    console.log(x--);
}