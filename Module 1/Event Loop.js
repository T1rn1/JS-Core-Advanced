function delayedCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

delayedCallback(() => {
    console.log('Callback вызван через 2 секунды');
});
