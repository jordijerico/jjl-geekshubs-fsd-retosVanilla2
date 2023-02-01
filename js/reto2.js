let cantidad = prompt("Dime una cantidad de numeros");

let num1 = prompt("dime un num");
let num2 = prompt("dime otro num");

for (let index = 0; index < cantidad; index++) {

    let random = numeroAleatorio(num1, num2);
    console.log(random);
    
}

function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}