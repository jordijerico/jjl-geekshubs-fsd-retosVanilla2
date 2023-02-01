// let numero = parseInt(prompt("Dime un numero"));

// for (let index = 0; numero > index; numero--) {
//     if (numero % 2 == 0) {
//         console.log("el numero " + numero + " es par");
//     }
// }





// let numero = parseInt(prompt("Dime un numero"));
// let suma = 0;
// // for (let index = 0; numero > index; numero--) {
// //     if (numero % 2 === 0) {
// //         console.log("el numero " + numero + " es par");
// //         suma += numero;
// //         console.log(suma);
// //     } else{
// //         console.log("el numero " + numero + " es impar");
// //     }
// // }



// TERNARIA
let numero = parseInt(prompt("Dime un numero"));
let suma = 0;
for (let index = 0; numero > index; numero--) {
    numero % 2 === 0 ? (
        console.log("el numero " + numero + " es par"),
        suma += numero
    ) : (
        console.log("el numero " + numero + " es impar")
    );
}
console.log(suma)

