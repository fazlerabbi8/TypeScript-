// static type annotation
let id = 5;
let userName = "mohamad";
let isActive = true;
let tags = ['ts', 'js'];
let score = [5, 6, 8];
let mixed = ['rabbi', 23];
// annotation in funtion 
function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}
const user = {
    name: 'rabbi',
    age: 23,
};
user.email = 'rabbi@gmail.com';
const user1 = {
    name: 'ali',
    age: 28
};
user1.email = 'ali@gmail.com';
const productData = {
    name: "phone",
    price: 200000,
};
const productWithColor = {
    name: "phone",
    price: 200000,
    color: "silver",
};
productData.discount = 5;
const product = productData;
export {};
