const promise1 = new Promise((resolve, reject) => {
    console.log('Операция 1 завершена');
    resolve('Результат операции 1');
});

const promise2 = new Promise((resolve, reject) => {
    console.log('Операция 2 завершена');
    resolve('Результат операции 2');
});

const promise3 = new Promise((resolve, reject) => {
    console.log('Операция 3 завершена');
    resolve('Результат операции 3');
});

function runOperations() {
    promise1
        .then(result => {
            console.log(result); 
            return promise2;     
        })
        .then(result => {
            console.log(result);
            return promise3;
        })
        .then(result => {
            console.log(result);
            console.log('Все операции завершены');
        })
}

runOperations();