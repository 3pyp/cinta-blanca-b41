var numero1 = 20;
var numero2 = 2;

if (numero1 > numero2) {
  var suma = numero1 + numero2;
} else {
  // console.log("No se cumplio");
}

var bebida = prompt("Escribe tu bebida favorita")

switch (bebida) {
  case "Vino":
    console.log("Tu bebida favorita es el Vino");
    break;
  case "Gaseosa":
    console.log("Tu bebida favorita es la Gaseosa");
    break;
  case "Cerveza":
    console.log("Tu bebida favorita es la Cerveza");
    break;

  default:
    console.log("No encontre tu bebida")
    break;
}
