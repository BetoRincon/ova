//import Vue from 'vue';

/*var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        
    }
});
*/

$('#btn').click(function () {
    
    calcularDensidad();  
    
});

function calcularDensidad() {
    var masa = $('#formulario-masa').val();
    var volumen =$('#formulario-volumen').val();
    var densidad = masa / volumen;
    if (densidad == $('#formulario-densidad').val()) {
        $('#correcto').css('display', 'inline-block');
        $('#incorrecto').css('display', 'none');
    }
    if (densidad != $('#formulario-densidad').val())
    {
        $('#incorrecto').css('display', 'inline-block');
        $('#correcto').css('display', 'none');
    }
   
}





<<<<<<< HEAD
=======


>>>>>>> 5051f34462da870abc43a65c55dffb67c56f9691
            