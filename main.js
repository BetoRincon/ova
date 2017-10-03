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

$('#formulario-rbtn').on('click', function () {
    var rta = $('input[name=gridRadios]:checked', '#formulario-rbtn').val();
    if ( rta == "D") {
        $('#check1').css('visibility', 'visible');
        $('#check2').css('visibility', 'hidden');
        $('input[name=gridRadios]').prop('disabled', true);
    }
    else if(rta=="A"||rta=="B"||rta=="C"||rta=="E"||rta=="F" ) {
        $('#check1').css('visibility', 'hidden');
        $('#check2').css('visibility', 'visible');
        $('input[name=gridRadios]').prop('disabled', true);
    }
   
});

$('#formulario-rbtn2').on('click', function () {
    
    var rta = $('input[name=gridRadios2]:checked', '#formulario-rbtn2').val();
    if ( rta == "E") {
        $('#check3').css('visibility', 'visible');
        $('#check4').css('visibility', 'hidden');
        $('input[name=gridRadios2]').prop('disabled', true);
        
    }
   else if(rta=="A"||rta=="B"||rta=="C"||rta=="D"||rta=="F" ) {
        $('#check3').css('visibility', 'hidden');
        $('#check4').css('visibility', 'visible');
        $('input[name=gridRadios2]').prop('disabled', true);
    }   
});

$('#formulario-rbtn3').on('click', function () {
    
    var rta = $('input[name=gridRadios3]:checked', '#formulario-rbtn3').val();
    
    if (rta == "A") {
        $('#check5').css('visibility', 'visible');
        $('#check6').css('visibility', 'hidden');
        $('input[name=gridRadios3]').prop('disabled', true);
        
    }
   else if(rta=="E"||rta=="B"||rta=="C"||rta=="D"||rta=="F" ) {
        $('#check5').css('visibility', 'hidden');
        $('#check6').css('visibility', 'visible');
        $('input[name=gridRadios3]').prop('disabled', true);
    }   
});

$('#formulario-rbtn4').on('click', function () {
    
    var rta = $('input[name=gridRadios4]:checked', '#formulario-rbtn4').val();
    
    if (rta == "B") {
        $('#check7').css('visibility', 'visible');
        $('#check8').css('visibility', 'hidden');
        $('input[name=gridRadios4]').prop('disabled', true);
        
    }
   else if(rta=="E"||rta=="A"||rta=="C"||rta=="D"||rta=="F" ) {
        $('#check7').css('visibility', 'hidden');
        $('#check8').css('visibility', 'visible');
        $('input[name=gridRadios4]').prop('disabled', true);
    }   
});
 





          