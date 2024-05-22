//Funcion para mostrar el Toast cada 10 segundos
function mostrarNotificacion() {
    var toast = document.getElementById('liveToast');
    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}
//Intervalo entre notificaciones 
setInterval(mostrarNotificacion, 10000);




//Espera a que el DOM este cargado para ejecutar el codigo
document.addEventListener("DOMContentLoaded", function(){
    const enlace = document.querySelector("#navbar-brand"); //Para seleccionar el elemento por su id
    const texto = '<span class="text-danger ms-2">Animal</span><span>Shop</span>'; //Texto que se anima
    const velocidad = 150; //Velocidad a la que va la animacion
    let contenido = '';  //Definimos esta variable para contener el texto animado
    let indice = 0;

//Funcion para animar el texto
    function animarTexto(){
        //Este if es para ver si aun quedan caracteres que agregar al texto
        if (indice < texto.length){
            //Si es que aun faltan caracteres agrega el siguiente a la variable contenido
            contenido += texto.charAt(indice);
            //Cursor que da el efecto como si alguien estuviese escribiendo
            enlace.innerHTML = contenido + '<span class="cursor"></span>';
            indice++; //Se usa para pasar al siguiente caracter
            setTimeout(animarTexto, velocidad); 
        }
        else{
            enlace.innerHTML = contenido;
        }
    }
    animarTexto();
});