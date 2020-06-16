var herramientas = ["Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos","Martillo", "Taladro", "Escaleras", "Clavos", "foto"];

// La propiedad length siempre me entrega el numero maximo de elementos en un arreglo (Array)
// console.log(herramientas.length) 54

var btn = document.getElementById("btn")

function init() {
  for(i = 0; i < herramientas.length; i++){
    console.log(herramientas[i])
  }
}

// btn.addEventListener('click', init)

var numeros = [1, 3, 24, 12, 33, 65, 89, 92]

function suma() {
  var acumulador = 0

  for(i=0; i < numeros.length; i++){
    acumulador = acumulador + numeros[i]
  }

  return acumulador
}

// console.log(object)

var platillos = ["Enchiladas", "Taco", "Tamal", "Pozole", "Barbacoa", "Picada"]

function mostrarPlatillos() {
  for(i=0; i < platillos.length; i++){
    if(platillos[i] === "Pozole" || platillos[i] === "Barbacoa"){
      console.log(platillos[i])
    } else {
      console.log("Sigue buscando")
    }
  }
}

mostrarPlatillos()