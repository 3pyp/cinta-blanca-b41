function suma(numero1, numero2){
  console.log(numero1 + numero2)
}

// suma(10, 5)
// suma(20, 15)

function obtenerPastel (dinero){
  if(dinero === 10) {
    console.log("Pastel obtenido")
  } else {
    console.log("Por favor ingresa tu dinero")
  }
}

// obtenerPastel(10)

function mostrarNombre(nombre){
  console.log(nombre)
}

// mostrarNombre('Cristian')

// mostrarNombre('Felipe')

// mostrarNombre('Carlos')

function mayorDeEdad(edad){
  if(edad >= 18){
    console.log("Eres mayor de edad")
  } else {
    console.log("No eres mayor de edad")
  }
}

// mayorDeEdad(15)

function centigradosAFarenheit(centigrados){
  var resultado = Math.round((centigrados *  9/5) + 32);
  
  console.log(resultado)
}

// centigradosAFarenheit(32)

var input = document.getElementById("centigrados");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  centigradosAFarenheit(input.value)
})

// var ayudanteDeSanta = {
//   color: "cafe",
//   altura: "50cm",
//   edad: 4,
//   ladrar: function(){
//     console.log("guau guau")
//   },
//   comer: function(){
//     console.log("ñam ñam")
//   }
// }

// ayudanteDeSanta.ladrar()
// ayudanteDeSanta.comer()