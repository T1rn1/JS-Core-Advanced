function Timer(){
    let seconds = 1;
    setInterval(() => {console.log(seconds);
        seconds++;
    }, 1000)
}

Timer();