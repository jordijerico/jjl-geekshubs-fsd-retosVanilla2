let numero = parseInt(prompt("dime un numerete"));

//decrementando ciclo

const Factorial = (num) => {
    let factorial = num;
    for (let index = num - 1; index > 0; index--) {
        factorial *= index;        
    }
    return factorial;
}
console.log(Factorial(numero));


// incrementando ciclo

const Factorial2 = (num) => {
    let factorial = num;
    for (let index = 1; index < num; index++) {
        factorial *= index;        
    }
    return factorial;
}
console.log(Factorial2(numero));


