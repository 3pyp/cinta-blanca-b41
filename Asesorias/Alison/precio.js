var valor = document.getElementById('valor')
var btn = document.getElementById('btn')
var camisetas = document.getElementsByClassName('precio')
var noHay = document.getElementById('no-hay')
var imagesContainer = document.getElementById('images-container')

function filtrar() {
  var precio = valor.value.replace(".", "")

  for (i = 0; i < camisetas.length; i++) {
    var precioCamiseta = camisetas[i].innerText.replace(".", "")

    if (precioCamiseta === precio){
      camisetas[i].parentElement.parentElement.style.display = "block"
    } else {
      camisetas[i].parentElement.parentElement.style.display = "none"
    }

    if(imagesContainer.innerText === ""){
      noHay.style.display = "block"
    } else {
      noHay.style.display = "none"
    }
    
  }

}

btn.addEventListener('click', filtrar)
