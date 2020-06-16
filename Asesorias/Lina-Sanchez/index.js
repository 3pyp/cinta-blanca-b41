var primera = document.getElementById('primera')
var segunda = document.getElementById('segunda')
var tercera = document.getElementById('tercera')

var btn_calc = document.getElementById('btn_calc')

function calc() {
  var primer_valor = Number(primera.value)
  var segundo_valor = Number(segunda.value)
  var tercer_valor = Number(tercera.value)

  var suma = primer_valor + segundo_valor + tercer_valor

  document.getElementById('resultado').innerText = suma
}

btn_calc.addEventListener('click', calc)