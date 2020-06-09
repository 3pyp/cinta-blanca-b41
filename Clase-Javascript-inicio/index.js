// VARIABLES

// String (cadena de texto)
var limones = 'un limon';

// console.log(limones)

limones = 'dos limones'

// console.log(limones)

// Number
var azucar = 20; 

// Booleanos (solo puede tener verdadero(true) o Falso (false))
var tieneDulce = false;

 // Arreglos
var instrumentos = ['Cuchillo', 'Tabla para cortar', 'vaso', 'cuchara', 'Exprimidor', 20, [], {}];
console.log(instrumentos[1])

instrumentos[1] = 'Tabla'

console.log(instrumentos[1])
// console.log(instrumentos[5])

// Objetos
var limonero = {
  nombre: 'Cristian', // Atributo o propiedad
  edad: 25, // Atributo o propiedad
  estatura: '165cm', // Atributo o propiedad
}
console.log(limonero.nombre)

limonero.nombre = 'Felipe'

console.log(limonero.nombre)

// console.log(limonero.nombre)

var mensaje = 'Hola mi nombre es ' + limonero.nombre + ' y tengo ' + limonero.edad + ' años'

// Concatenar Strings (unir cadenas de textos)
// console.log(mensaje)

// var nombre = prompt('Escribe tu nombre')

// console.log("Hola " + nombre)