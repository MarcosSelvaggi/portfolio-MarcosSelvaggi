function actualizarHora(){
    document.getElementById("horaActual").innerHTML = Date()
}
document.addEventListener("DOMContentLoaded", actualizarHora);

setInterval(actualizarHora, 1000);
