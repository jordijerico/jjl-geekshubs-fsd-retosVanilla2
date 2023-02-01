let numero1 = parseInt(prompt("Dime un numero"));
let numero2 = parseInt(prompt("Dime otro numero"));

const Dividir = (num1, num2)  => {
    let resultado = num1 / num2;
    return resultado;
}

window.alert(Dividir(numero1, numero2));