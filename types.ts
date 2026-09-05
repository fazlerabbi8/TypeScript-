// static type annotation
let id: number = 5;
let userName: string = "mohamad";
let isActive: boolean = true;
let tags: string[] = ['ts', 'js'];
let score: number[] = [5 , 6 , 8];
let mixed: (string | number)[] = ['rabbi', 23];



// annotation in funtion 
function calculateTotal(price: number, quantity: number) : number {
    const total = price * quantity;
    return total;
}


// interface
interface User {
    name: string;
    age: number;
    email?:string;
}

// Type alias

type User2 = {
    name: string;
    age:number;
    email?: string;
}

const user: User = {
    name: 'rabbi',
    age: 23,
};

user.email = 'rabbi@gmail.com';

const user1: User = {
    name: 'ali',
    age:28
}

user1.email = 'ali@gmail.com';

interface Product {
  name: string;
  price: number;
  discount?: number;
}


// example(TypeScript is stricter about object literals typed directly, but relaxed when the same shape comes in through a variable)
const productData: Product = {
  name: "phone",
  price: 200000,
};

const productWithColor = {
  name: "phone",
  price: 200000,
  color: "silver",
};

productData.discount = 5;

const product: Product = productData;

export {}

