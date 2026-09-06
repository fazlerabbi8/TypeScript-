function safeUpperCase(value: unknown){
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else{
        return "Not a string";
    }
}

const checkUpper = safeUpperCase('hello');
console.log(checkUpper)