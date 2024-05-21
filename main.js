function mostrarNotificacion() {
    var toast = document.getElementById('liveToast');
    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

//Intervalo entre notificaciones 
setInterval(mostrarNotificacion, 10000);




window.onload = function() {
    animarPuntos();
};



function animarPuntos() {
    var puntos = document.getElementById('puntos');
    puntos.style.display = 'inline-block';
}