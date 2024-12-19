function percentage(array){
    return array.map( number => number += 0.1 * number)
}

console.log(percentage([1, 20, 100, 55]));