document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnEnviarMensaje").addEventListener("click", function (enviarMensaje) {
        enviarMensaje.preventDefault(); // Para evitar que el formulario recargue la página
        enviarMensaje;
    });
});


//Función a terminar de desarrollar para enviar el mail en la consulta
function enviarMensaje(){
    
    let nombre = document.getElementById("nombreContacto").value;
    let email = document.getElementById("emailContacto").value;
    let mensaje = document.getElementById("mensajeContacto").value;

    if (nombre != "" && email != "" && mensaje != "") 
        {
            console.log(nombre);
            console.log(email);
            console.log(mensaje);

            document.getElementById("nombreContacto").value = "";
            document.getElementById("emailContacto").value = "";
            document.getElementById("mensajeContacto").value = "";
        }
        else
        {
            console.log("Alguno está vacío");
        }

}