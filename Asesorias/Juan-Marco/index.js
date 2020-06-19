var text = document.getElementById('textosecun')

var textos = ['Limpiar', 'Comer', 'Guardar', 'Cocinar', 'Ordenar']

function changeText() {
  return textos[Math.floor(Math.random() * textos.length)];
}

setInterval(function(){
  text.innerText = changeText()
}, 2000)