class Product {
  static totalProductsCreated = 0;

  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    Product.totalProductsCreated++;
  }
}

const phone = new Product("Phone", 500);
const laptop = new Product("Laptop", 1000);

console.log(Product.totalProductsCreated);