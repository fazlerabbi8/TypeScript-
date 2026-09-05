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

const user: User = {
    name: 'rabbi',
    age: 23,
};

user.email = 'rabbi@gmail.com'



export {}

