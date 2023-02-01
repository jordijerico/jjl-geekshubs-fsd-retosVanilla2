

// if (figura != "circulo" || figura != "círculo" || figura != "cuadrado" || figura != "triangulo") {
//     window.alert("Dime una figura entre triangulo,cuadrado o circulo")
// } else {
    
// }
let figura ;
do {
    figura = prompt("Dime que figura entre traingulo,cuadrado o circulo que quieres calcular");

    if (figura == "circulo" || figura == "círculo") {
        let pi = 3.1415;
        let radio = parseInt(prompt("Dime el radio"));
        let area = pi * radio ** 2;
        window.alert(area);
    }

    if (figura == "triangulo" || figura == "triángulo") {
        let base = prompt("Dime la base");
        let altura = prompt("Dime la altura")
        let area = base * altura / 2;
        window.alert(area);
    }

    if (figura == "cuadrado") {

        let lado = prompt("Dime el lado");
        let lado2 = prompt("Dime el otro lado");
        let area = lado * lado2;
        window.alert(area);
    }
} while (figura != "cuadrado" || figura != "triangulo" || figura != "triángulo" || figura != "circulo" || figura != "círculo");

