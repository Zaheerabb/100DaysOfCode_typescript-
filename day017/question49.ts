// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter 
// representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.


function hobbies(...hobby:string[]) {
    for (let i = 0; i < hobby.length; i++) {
        console.log(`${hobby[i]} is my hobby`);
    }
}
hobbies("reading","playing cricket","coding","swiming")