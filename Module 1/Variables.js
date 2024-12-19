function definedVariables(){
    if (true){
        var xVar = 0;
        let xLet = 0;
        const xConst = 0;
    };

    console.log(xVar); //0
    console.log(xLet); //xLet is not defined 
    console.log(xConst); //xConst is not defined
}

console.log(xVar); //xVar is not defined
console.log(xLet); //xLet is not defined 
console.log(xConst); //xConst is not defined