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
    var densidad = $('#formulario-densidad').val();
    var masaOk = false;
    var volumenOk = false;
    var densidadOk = false;

   

    /*pasar a minúsculas */
    masa = masa.toLowerCase();
    volumen = volumen.toLowerCase();
    densidad = densidad.toLowerCase();

    /* verificación strings */
    if (masa.includes('50g') || masa.includes('50 g') || masa.includes('50 gramos') || masa.includes('50gramos') || masa.includes('50[gramos]') || masa.includes('50 [gramos]') || masa.includes('50[g]') || masa.includes('50 [g]')) {
        masaOk = true;
        /*alert(masaOk);*/
    }
    if (volumen.includes('10ml') || volumen.includes('10 ml') || volumen.includes('10 mililitros ') || volumen.includes('10mililitros ') || volumen.includes('10[mililitros]') || volumen.includes('10 [mililitros]') || volumen.includes('10[ml]') || volumen.includes('10 [ml]')) {
        volumenOk = true;
       /* alert(volumenOk);*/
    }
    if (densidad.includes('5g/ml') || densidad.includes('5 g/ml') || densidad.includes('5 [g/ml]')|| densidad.includes('5[g/ml]')) {
        densidadOk = true;
        /*alert(densidadOk);*/
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

    if (densidadOk == true && volumenOk == true && masaOk == true) {
        /*alert("entró if");*/
        $('#correcto').css('display', 'inline-block');
        $('#incorrecto').css('display', 'none');
        $('#validacion').css('display', 'none');
        /*https://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery*/ 
        $('#formulario-masa').prop('disabled', true);
        $('#formulario-volumen').prop('disabled', true);
        $('#formulario-densidad').prop('disabled', true);
    } else {
        $('#incorrecto').css('display', 'inline-block');
        $('#correcto').css('display', 'none');
        $('#validacion').css('display', 'none');
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

$('#cuestionario1').on('click', function () {
    
    var rta = $('input[name=cuestionario1]:checked', '#cuestionario1').val();
   
    if (rta == "densidad1" || rta == "volumen1" || rta == "masa1") {
        if (rta == "densidad1" || rta == "volumen1") {
            $('#check2').css('visibility', 'visible');
            $('#check1').css('visibility', 'hidden');
           
        }
        else if (rta == "masa1") {
            $('#check1').css('visibility', 'visible');
            $('#check2').css('visibility', 'hidden');
           
        }
    }  
    else if (rta == "densidad2" || rta == "volumen2" || rta == "masa2") {
        if ( rta == "densidad2" || rta == "masa2") {
            $('#check4').css('visibility', 'visible');
            $('#check3').css('visibility', 'hidden');
            
        }
        else if (rta == "volumen2") {
            $('#check3').css('visibility', 'visible');
            $('#check4').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad3" || rta == "volumen3" || rta == "masa3") {
        if ( rta == "volumen3" || rta == "masa3") {
            $('#check6').css('visibility', 'visible');
            $('#check5').css('visibility', 'hidden');
            
        }
        else if (rta == "densidad3") {
            $('#check5').css('visibility', 'visible');
            $('#check6').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad4" || rta == "volumen4" || rta == "masa4") {
        if ( rta == "volumen4" || rta == "masa4") {
            $('#check8').css('visibility', 'visible');
            $('#check7').css('visibility', 'hidden');
           
        }
        else if (rta == "densidad4") {
            $('#check7').css('visibility', 'visible');
            $('#check8').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad5" || rta == "volumen5" || rta == "masa5") {
        if ( rta == "densidad5" || rta == "masa5") {
            $('#check10').css('visibility', 'visible');
            $('#check9').css('visibility', 'hidden');
           
        }
        else if (rta == "volumen5") {
            $('#check9').css('visibility', 'visible');
            $('#check10').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad6" || rta == "volumen6" || rta == "masa6") {
        if ( rta == "densidad6" || rta == "volumen6") {
            $('#check12').css('visibility', 'visible');
            $('#check11').css('visibility', 'hidden');
           
        }
        else if (rta == "masa6") {
            $('#check11').css('visibility', 'visible');
            $('#check12').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad7" || rta == "volumen7" || rta == "masa7") {
        if ( rta == "masa7" || rta == "volumen7") {
            $('#check14').css('visibility', 'visible');
            $('#check13').css('visibility', 'hidden');
            
        }
        else if (rta == "densidad7") {
            $('#check13').css('visibility', 'visible');
            $('#check14').css('visibility', 'hidden');
           
        }
    }
    else if (rta == "densidad8" || rta == "volumen8" || rta == "masa8") {
        if ( rta == "masa8" || rta == "volumen8") {
            $('#check16').css('visibility', 'visible');
            $('#check15').css('visibility', 'hidden');
            
        }
        else if (rta == "densidad8") {
            $('#check15').css('visibility', 'visible');
            $('#check16').css('visibility', 'hidden');
            
        }
    }
    else if (rta == "densidad9" || rta == "volumen9" || rta == "masa9") {
        if ( rta == "masa9" || rta == "densidad9") {
            $('#check18').css('visibility', 'visible');
            $('#check17').css('visibility', 'hidden');
            
        }
        else if (rta == "volumen9") {
            $('#check17').css('visibility', 'visible');
            $('#check18').css('visibility', 'hidden');
           
        }
    }
});





 





          