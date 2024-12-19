'use strict'

function factorial(number){
    if (number < 0){
        return "not exist";
    } else if (number === 0 || number === 1){
        return 1;
    }
    let result = number;
    while (number > 1){
        number--;
        result *= number;
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));