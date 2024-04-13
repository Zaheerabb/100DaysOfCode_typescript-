//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

let traditional = {
    value: "zaheer",
    tradFun: function name() {
        console.log(`My name is ${this.value}`);
    }
}

let Arrow = {
    value: "zaheer",
    arwFun: () => {
        console.log(`My name is ${this.value}`);
    }
}

traditional.tradFun();
Arrow.arwFun();