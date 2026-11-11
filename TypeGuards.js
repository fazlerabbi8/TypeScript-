"use strict";
// for primitive types
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
function makeSound(animal) {
    if ("bark" in animal) {
        animal.bark();
    }
    else {
        animal.mewo();
    }
}
function getShippingInfo(product) {
    if ("weight" in product) {
        return `Ships at ${product.weight}kg`;
    }
    else {
        return `Instant download: ${product.downloadUrl}`;
    }
}
const waterBottle = { name: "RFL", weight: 5 };
console.log(getShippingInfo(waterBottle));
