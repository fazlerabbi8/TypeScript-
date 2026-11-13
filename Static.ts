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



// Static methods

class Product1 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static fromApiResponse(data: { name: string; price: number }) {
    return new Product1(data.name, data.price);
  }
}

const apiData = { name: "Tablet", price: 300 };
const product = Product1.fromApiResponse(apiData); 

console.log(product.name);