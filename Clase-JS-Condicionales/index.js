var numero1 = 101; // Number
var numero2 = 100;

var texto1 = "Tortilla";
var texto2 = "Tortilla"; // String

if (numero2 > numero1) {
  // console.log("Es mayor");
} else {
  // console.log("Es menor");
}

if (numero1 === texto2) {
  // console.log("Es igual");
} else {
  // console.log("No es igual");
}

if (numero1 !== numero2) {
  // console.log("Es distinto");
} else {
  // console.log("Es igual");
}

if (numero1 === numero2 && texto1 !== texto2) {
  // console.log("Verdadero")
} else {
  // console.log("Falso")
}

if (numero1 === numero2 || texto1 !== texto2) {
  // var suma = numero1 + numero2
  // console.log(suma)
} else {
  // console.log("ninguna cumple")
}

if (numero1 > numero2) {
  alert('Numero 1 Es mayor')
} else if (numero2 > numero1) {
  alert("Numero 2 es mayor")
} else {
  alert("son iguales")
}