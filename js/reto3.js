let numero = parseInt(prompt("dime un numerete"));

const EsPrimo = (num) => {

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(EsPrimo(numero));