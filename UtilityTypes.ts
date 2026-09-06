interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

// function updateProduct(id: string, updates: Product) {
//  // ...
// }

// problem
// updateProduct("123", { price: 99 }); // Error — missing name, stock, id


// Partial<T> — makes every field optional

function updateProduct(id: string, update: Partial<Product>){
    //..
}
updateProduct('123', {price: 100});


// Pick<T, Keys> — select only some fields

type ProductPreview = Pick<Product, "name" | "price">;


// Omit<T, Keys> — the opposite: exclude some fields

type newProduct = Omit<Product, "id">;
// equivalent to: { name: string; price: number; stock: number }


//Record<Keys, ValueType> — build an object type: object where every key is a specific set of strings, and every value is the same type.

type Inventory = Record<string, number>;

// const stock: Inventory = {
//     "prod-1": 50,
//     "prod-2": 30,
// };


// another example
// type Role = "admin" | "vendor" | "customer";

// type RolePermissions = Record<Role, string[]>;

// const permissions: RolePermissions = {
//   admin: ["read", "write", "delete"],
//   vendor: ["read", "write"],
//   customer: ["read"],
// };