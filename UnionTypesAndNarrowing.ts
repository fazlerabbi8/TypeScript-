export {}


// Union Types
function printId(id: string | number){
    console.log(id);
}

printId("abc123");
printId(123);
// printId(true) its not accepted


// Union Types & Narrowing

function printingId(id: string | number){
    if(typeof(id) === 'string'){
        console.log(id.toLowerCase);
    }
    else{
        console.log(id.toFixed(2));
    }
}


// practice example
function formatValue(value: string | boolean){
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else{
        return value.toString();
    }
}



