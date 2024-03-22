/*
Question 62: Making a Student Template: Create a blueprint for student information, including their name, 
age, and the classes they're taking, and then fill in this blueprint with an example student.
*/

type blueprint = {
    name:string,
    age:number,
    class:string
}
function studentInfo(name1:string,age1:number,class1:string):blueprint {
    // let obj:blueprint {
        
    // }
    return {
        name:name1,
        age:age1,
        class:class1
    }
}
console.log(studentInfo("zaheer",19,"12th"));