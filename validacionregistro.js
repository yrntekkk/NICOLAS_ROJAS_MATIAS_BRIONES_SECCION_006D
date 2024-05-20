$(document).ready(function(){
    $("#registro").submit(function(event){
        event.preventDefault();

        var nombre = $("nombre").val();
        var apellido = $("apellido").val();
        var telefono = $("telefono").val();
        var rut = $("rut").val();
        var email = $("email").val();
        var contraseña = $("contraseña").val();

        if(nombre.length < 3 || nombre.length > 20){
            alert("El nombre debe tener entre 3 y 20 caracteres.");
            return;
        }

        if(apellido.length < 3 || apellido.length > 20){
            alert("El apellido debe tener entre 3 y 20 caracteres.");
            return;
        }

        if(telefono.length < 9 || telefono > 12){
            alert("El celular deber tener entre 9 y 12 caracteres.");
            return;
        }

        if(rut.length < 9 || rut.length > 10){
            alert("El rut debe tener entre 9 y 10 caracteres.");
            return;
        }


        if(contraseña.length < 3 || contraseña.length > 12){
            alert("La contraseña debe tener entre 3 y 12 caracteres.");
            return;
        }


    });
});