$(document).ready(function(){
    $('#formularioLogin').on('submit', function(event){
        event.preventDefault();

        var correo = $('correo').val().trim();
        var contraseña = $('contraseña').val().trim();
        var errorCorreo = $('errorCorreo');
        var errorContraseña =$('errorContraseña');

        errorCorreo.text('');
        errorContraseña.text('');

        var esValido = true;

        //Validaciones para el correo
        if(correo === ''){
            errorCorreo.text('El correo electronico es obligatorio');
            esValido = false;
        }
        else if (!/\S+@\S+\.\S+/.test(correo)){
            errorCorreo.text('El correo electronico no es valido')
            esValido = false;
        }

        //Validaciones para la contraseña
        if(contraseña === ''){
            errorContraseña.text('La contraseña es obligatoria')
            esValido = false;
        }

        if (esValido){
            alert('Sesion iniciada con exito')
        }
    });
});
