// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const obj = {
    name: "zaheer",
    outer: function () {
      console.log(this.name); // logs "zaheer"
  
      const inner = () => {
        console.log(this.name); // Still accesses obj's 'name' due to arrow function capturing 'this' from outer scope
      };
      inner();

    },
  };
  obj.outer();
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.