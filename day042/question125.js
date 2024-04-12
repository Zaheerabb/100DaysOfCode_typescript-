/*
Question 125: Modify a method in an object to use the this keyword to access
another property in the same object.
*/
var addition = {
    firstNum: 2,
    secdNum: 4,
    function: function () {
        return this.firstNum + this.secdNum;
    }
};
console.log(addition.function());
