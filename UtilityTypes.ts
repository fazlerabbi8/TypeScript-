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





//another practice ecample 


// 1.Create a type ProductSummary using Pick that only has name and stock.
// 2.Create a type ProductWithoutStock using Omit that has everything except stock.
// 3.Create a Record type called ProductCatalog that maps string product IDs to Product objects.
type ProductSummary = Pick<Product, "name" | "stock">;
type ProductWithoutStock = Omit<Product, "stock">
type ProductCatalog = Record<string, Product>


