// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var obj = {
    name: "zaheer",
    outer: function () {
        var _this = this;
        console.log(this.name); // logs "zaheer"
        var inner = function () {
            console.log(_this.name); // Still accesses obj's 'name' due to arrow function capturing 'this' from outer scope
        };
        inner();
    },
};
obj.outer();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
