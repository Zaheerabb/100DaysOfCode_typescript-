/*
Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
*/

let studentID = new Map<string, number>();

studentID.set("Abdullah",2234);
studentID.set("Ali",1234);
studentID.set("Ahmed",2312);

studentID.forEach((id,Name) => {
    console.log(`Name: ${Name} ID: ${id}`);
});