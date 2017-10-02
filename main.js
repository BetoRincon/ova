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
        $('#validacion').css('display', 'none');
        /*https://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery*/ 
        $('#formulario-masa').prop('disabled', true);
        $('#formulario-volumen').prop('disabled', true);
        $('#formulario-densidad').prop('disabled', true);
    }
    if (densidad != $('#formulario-densidad').val())
    {
        $('#incorrecto').css('display', 'inline-block');
        $('#correcto').css('display', 'none');
        $('#validacion').css('display', 'none');
    }
    if (masa==""||volumen==""||densidad=="") {
        $('#validacion').css('display', 'inline-block');
        $('#incorrecto').css('display', 'none');
        $('#correcto').css('display', 'none');
        
    }
   
}




          