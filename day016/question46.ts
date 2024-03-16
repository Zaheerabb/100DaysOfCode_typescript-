
// making laptop object
let laptop = {
    make: "lenavo",
    model: "L460",
    date:"11-2-2023",
    describe: function () {
        console.log(`this is ${laptop.make} laptop ${laptop.model} released on ${laptop.date}`)
    }
}
// calling laptop decribe function
laptop.describe();