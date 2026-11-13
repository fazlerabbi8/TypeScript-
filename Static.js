"use strict";
class Product {
    static totalProductsCreated = 0;
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.totalProductsCreated++;
    }
}
const phone = new Product("Phone", 500);
const laptop = new Product("Laptop", 1000);
console.log(Product.totalProductsCreated);
