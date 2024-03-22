"use strict";
function carDetails(name, company, extra) {
    return Object.assign({ company: company, name: name }, extra);
}
console.log(carDetails("civic", "Honda", { release: "2023" }));
