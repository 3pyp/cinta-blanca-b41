// OBJETOS
var mesa = {
  altura: "90cm",
  ancho: "70cm",
  color: "cafe",
  patas: 4,
  sillas: ["silla1", "silla2", "silla3", "silla4"],
  marca: {
    nombre: "Rimax",
    vendedor: "Andres",
  },
  aLaVenta: true,

  expandir: function () {
    return "Se expandio";
  },
};

mesa.altura = "75cm";

// console.log(mesa.color)

// console.log(mesa.expandir())

// HTML y Javascript
var titulo = document.getElementById("titulo"); // Obtenemos el H1 de nuestro HTML con el id titulo

var btn = document.getElementById("boton");  // Obtenemos el button de nuestro HTML con el id boton

function cambiarTitulo (){
  titulo.innerHTML = "Se cambio el texto";
}

btn.addEventListener("click", cambiarTitulo)


// EJERCICIO COLOR

var color = document.getElementById('input_color')

var btn_color = document.getElementById('boton_color')

function cambiarColor(){
  var colorElegido = color.value;
  titulo.style.color = colorElegido
}

btn_color.addEventListener("click", cambiarColor)