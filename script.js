const textarea = document.getElementById("txaEntrada");
const boton = document.getElementById("btnBoton");
const p = document.getElementById("pSalida");

function cambiarTexto(){
    p.innerHTML = textarea.value;
}

boton.addEventListener('click',cambiarTexto);
