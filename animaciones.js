//atributos
$adelante = $('#adelante');
$atras = $('#atras');
$refrescar = $('#refrescar');
$cuadroVerde = $('#cuadro-verde');
$balin = $('#balin');
$balin2 = $('#balin2');
$balin3 = $('#balin3');
$balin4 = $('#balin4');
$balin5 = $('#balin5');
$anillo5 = $('#anillo5');
$bolaIcopor = $('#bola-icopor');
$glicerina = $('#glicerina');
$alcohol = $('#alcohol');
$agua = $('#agua');
$aceite = $('#aceite');
$miel = $('#miel');
var contador;
var auth;
$bolaIcopor.css('visibility', 'hidden');
$balin2.css('visibility', 'hidden');
$bolaIcopor.css('visibility', 'hidden');
$glicerina.css('visibility', 'hidden');
$alcohol.css('visibility', 'hidden');
$agua.css('visibility', 'hidden');
$aceite.css('visibility', 'hidden');
$miel.css('visibility', 'hidden');
var ej2Auth = true; 

/*Animacion de preguntas */
$pregunta1 = $('#pregunta1');
$pregunta2 = $('#pregunta2');
$pregunta3 = $('#pregunta3');
$anuncioRta = $('#anuncioRespuesta');


//carga de pag
$(document).ready(function () {
    $('#svg-fluidos').css('display', 'block');
    contador = 0;
    auth = false;
    
    

    
});

/* Funcion que retrasa la aparicion de los div */
function playPreguntas(hola) {
    
    
    setTimeout(function ()
    {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000)
    
    var masterTl = new TimelineMax();
    masterTl/* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($pregunta1,1.2,{autoAlpha:1},2)
        .to($pregunta2, 1.2, { autoAlpha: 1 }, '+=1.5')
        .to($pregunta3, 1.2, { autoAlpha: 1 }, '+=5.5')
        .to($anuncioRta,1.2,{autoAlpha:1},'+=5.5')  
}

function playPreguntas2() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('.superior'),2,{autoAlpha:1},1)
        .to($('.columna1 > #densidad'), 1.2, { autoAlpha: 1 }, '+=13')
        .to($('.columna1 > #lista'), 1.2, { autoAlpha: 1 }, '+=8')
        .to($('.columna2 > #densidad'), 1.2, { autoAlpha: 1 }, '+=21')
        .to($('.columna2 > #lista'), 1.2, { autoAlpha: 1 }, '+=4')
}

function playPreguntas3() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('#densidad-texto-sup'),2,{autoAlpha:1},1)
        .to($('#densidad-formula-grande'), 1.2, { autoAlpha: 1 }, '+=5')
        .to($('#densidad-texto-medio'), 1.2, { autoAlpha: 1 }, '+=0.1')
        .to($('#densidad-formula-medio'), 1.2, { autoAlpha: 1 }, '+=0.5')
        .to($('#densidad-texto-bajo'), 1.2, { autoAlpha: 1 }, '+=0.2')
        .to($('#densidad-formula-bajo'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('#directa'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('#flecha1'), 1.2, { y: 0 }, '+=4')
        .to($('#flecha2'), 1.2, { y: 0 }, '+=1')
        .to($('#flecha3'), 1.2, { y: 0 }, '+=1')
        .to($('#flecha4'), 1.2, { y: 0 }, '+=1')
        .to($('#indirecta'), 1.2, {autoAlpha: 1 }, '+=4')
        .to($('#flecha5'), 1.2, { y: 0 }, '+=1')
        .to($('#flecha6'), 1.2, { y: 0, autoAlpha:1 }, '+=1')
        .to($('#flecha7'), 1.2, { y: 0 }, '+=1')
        .to($('#flecha8'), 1.2, { y:0, autoAlpha:1 }, '+=0.5')
       
        
}


function playPreguntas4() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('.superior'),2,{autoAlpha:1},1)
        .to($('#p1'), 1.2, { autoAlpha: 1 }, '+=6')
        .to($('#img1'), 1.2, { autoAlpha: 1 }, '+=6')
        .to($('#despeje1'), 1.2, { autoAlpha: 1 }, '+=3')
        .to($('#p2'), 1.2, { autoAlpha: 1 }, '+=15')
        .to($('#img2'), 1.2, { autoAlpha: 1 }, '+=2')
        .to($('#traslado1'), 1.2, { autoAlpha: 1 }, '+=8')
        .to($('#traslado2'), 1.2, { autoAlpha: 1 }, '+=3')
        .to($('#DensidadFormula2'), 1.2, { autoAlpha: 1, x: 300, y: 113 }, '+=0.5')
        .to($('#VolumenFormula2'), 1.2, { autoAlpha: 1, x: 20, y: 74.58 }, '-=0.6')
        .to($('#despeje2'), 1.2, { autoAlpha: 1, }, '+=0.6')
        .to($('#lineaRoja'), 1.2, { autoAlpha: 1, }, '+=13')
        .to($('#p3'), 1.2, { autoAlpha: 1 }, '+=4')
        .to($('#img3'), 1.2, { autoAlpha: 1 }, '+=5')
        .to($('#traslado3'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('#X'), 1.2, { autoAlpha: 1, }, '+=0.1')
        .to($('#division'), 1.2, { autoAlpha: 0,}, '+=0.1')
        .to($('#volumenFormula3'), 1.2, { autoAlpha: 1, x:0, y:42.11 }, '+=0.1')
        .to($('#despeje3'), 1.2, { autoAlpha: 1, x: 20 }, '+=8')
        .to($('#lineaRoja3'), 1.2, { autoAlpha: 1 }, '+=2')
        
}

function playPreguntas5() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('#title-arquim'),2,{autoAlpha:1},1)
        .to($('.columna1 #content'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('.columna2 > #superior'), 1.2, { autoAlpha: 1 }, '+=9')
        .to($('#probetas > #centro'), 1.2, { autoAlpha: 1 }, '+=0.5')
        .to($('#izquierdo'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('#derecho'), 1.2, { autoAlpha: 1 }, '+=2.5')
        .to($('#volumenes'), 1.2, { autoAlpha: 1 }, '+=8')
        .to($('#inferior > #izquierdo'), 1.2, { autoAlpha: 1 }, '+=28')
        .to($('#inferior > #centro'), 1.2, { autoAlpha: 1 }, '+=2')
        .to($('#inferior > #derecho'), 1.2, {autoAlpha: 1 }, '+=6')
        
}

function playPreguntas6() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('.columna1 > #content'),2,{autoAlpha:1},1)
        
        
}

function playPreguntas7() {
    
    
    setTimeout(function () {
        /*https://stackoverflow.com/questions/21850830/jquery-delay-a-variables-play-function */
        /*https://www.w3schools.com/Jsref/met_audio_play.asp */
        document.getElementById("audio2").play();
    }, 1000);


    
    var masterTl = new TimelineMax();
    masterTl /* Acá Juan, el primer número es el tiempo del efecto, el autoAlpha es la opa
    cidad y el último número es el retraso. Es el retraso el que modifica*/
            .to($('#derecha > #tabla'),1,{autoAlpha:1},2)
        .to($('.item'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('.columna2 > #superior'), 1.2, { autoAlpha: 1 }, '+=9')
        .to($('#probetas > #centro'), 1.2, { autoAlpha: 1 }, '+=0.5')
        .to($('#izquierdo'), 1.2, { autoAlpha: 1 }, '+=1')
        .to($('#derecho'), 1.2, { autoAlpha: 1 }, '+=2.5')
        .to($('#volumenes'), 1.2, { autoAlpha: 1 }, '+=8')
        .to($('#inferior > #izquierdo'), 1.2, { autoAlpha: 1 }, '+=28')
        .to($('#inferior > #centro'), 1.2, { autoAlpha: 1 }, '+=2')
        .to($('#inferior > #derecho'), 1.2, {autoAlpha: 1 }, '+=6')
        
}




//eventos

/*$adelante.click(function () {
     
  // alert(window.location.href);
    var ubicacion = "http://localhost/ova/";


 
    switch (window.location.href) {
        case ubicacion:
            window.location.replace(ubicacion + "densidad1.html");
            break;
        case ubicacion + "index.html":
            window.location.replace(ubicacion + "densidad1.html");
            break;
        case ubicacion + "densidad1.html":
            window.location.replace(ubicacion + "densidad2.html");
            break;    
        case ubicacion + "densidad2.html":
            window.location.replace(ubicacion + "densidad3.html");
            break;
        case ubicacion + "densidad3.html":
            window.location.replace(ubicacion + "densidad4.html");
            break;
        case ubicacion + "densidad4.html":
            window.location.replace(ubicacion + "densidad5.html");
            break;
        case ubicacion + "densidad5.html":
            window.location.replace(ubicacion + "densidad6.html");
            break;
        
    }
});*/

/*$atras.click(function () {
    
 // alert(window.location.href);
   var ubicacion = "http://localhost/ova/";

   switch (window.location.href) {
        case ubicacion + "index.html":
           window.location.replace(window.location.href);
           break;    
        case ubicacion + "densidad1.html":
           window.location.replace(ubicacion+"index.html");
           break;
        case ubicacion + "densidad2.html":
           window.location.replace(ubicacion+"densidad1.html");
           break;
        case ubicacion + "densidad3.html":
           window.location.replace(ubicacion+"densidad2.html");
           break;
        case ubicacion + "densidad4.html":
           window.location.replace(ubicacion+"densidad3.html");
           break;
        case ubicacion + "densidad5.html":
           window.location.replace(ubicacion+"densidad4.html");
           break;
        case ubicacion + "densidad6.html":
           window.location.replace(ubicacion+"densidad5.html");
           break;
           
   }
});*/

/*$refrescar.click(function () {
    reload();
    function loadPage() {
        location.reload();
        setTimeout(loadPage(), 3000);
    }
    /* https://www.w3schools.com/js/js_timing.asp */
    
  /*  
});*/

$cuadroVerde.click(function () {
    //reload();
    location.reload(); 
    function loadPage() {
        location.reload();
        setTimeout(loadPage(), 3000);
    }
});

$adelante.mouseenter(function () {
    animacion1("adelante");
});
$adelante.mouseleave(function () {
    animacion2("adelante");
});
$atras.mouseenter(function () {
    animacion1("atras");
});
$atras.mouseleave(function () {
    animacion2("atras");
});
$refrescar.mouseenter(function () {
    reload();
})

//draggable

/* https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2 */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    /*obtener id de elemento draggable */ 
    ev.dataTransfer.setData("text", ev.currentTarget.id);
    ev.dataTransfer.setData("text", ev.target.id);
   
   /* alert(ev.currentTarget.id);*/
}

function drop(ev) {
    ev.preventDefault();
    
    /*obtener id de elemnto draggable, sin esta linea no funciona el evento de drop*/
    var data = ev.dataTransfer.getData("text");
   /* alert(data);*/
     //para controlar la entrada de fluidos en ejercicio1 y las animaciones de ejercicio2
    
    if (data == "instrumento-balin") {
        $balin4.css('visibility', 'visible');
        TweenMax.fromTo($balin4, 0.5, { y: -50, onComplte: showSixej2() }, { y: 0, onComplte: showSixej2() });
    }
    if (data == "instrumento-anillo") {
        $balin4.css('visibility', 'visible');
        TweenMax.fromTo($balin4, 0.5, { y: -120, onComplte: showSixej3() }, { y: 0, onComplte: showSixej3() });
    }

    if (data == "svg-balin-balanza") {
        $('#svgbalin4').css('display', 'none');
        $('#balin5').css('visibility', 'visible');
        hideSixej2();
        var masterTl = new TimelineMax();
        masterTl
            .fromTo($balin5, 0.5, { y: -550 }, { y: -20 })
            /*.fromTo($anillo5, 0.5, { y: 0 }, { y: 790 })*/
            .to($('#_x34_0ml'), 0.3, { css: { visibility: 'visible' } }, '-=0.2')
            .to($('#_x33_0ml'), 0.3, { css: { visibility: 'visible' } });
    }
    if (data == "svg-anillo-balanza") {
        $('#svg-anillo2').css('display', 'none');
        $('#anillo5').css('visibility', 'visible');
        hideSixej3();
        var masterTl = new TimelineMax();
        masterTl
            
            .fromTo($anillo5, 0.5, { y: 0 }, { y: 470 })
            .to($('#_x33_5ml'), 0.3, { css: { visibility: 'visible' } }, '-=0.2')
            .to($('#_x33_0ml'), 0.3, { css: { visibility: 'visible' } });
    }


   
    
    
    if (data == "lista-Balin" && contador==0) {
        $balin2.css('visibility', 'visible');        
        TweenMax.fromTo($balin2, 1, { y: -500 }, { y: 0 });
        contador++;
        
    }
    else
    {
        if (data == "lista-Miel" && contador==1) {
            $miel.css('visibility', 'visible');        
            TweenMax.fromTo($miel, 1, { autoAlpha: 0, y: -500 }, { autoAlpha: 1, y: 0 });
            contador++;
            
        }
        else {
            if (data == "lista-Glicerina" && contador==2) {
                $glicerina.css('visibility', 'visible');        
                TweenMax.fromTo($glicerina, 1, { autoAlpha: 0, y: -500 }, { autoAlpha: 1, y: 0 });
                contador++;
            }
            else
            {
                if (data == "lista-Agua" && contador==3) {
                    $agua.css('visibility', 'visible');        
                    TweenMax.fromTo($agua, 1, { autoAlpha: 0, y: -500 }, { autoAlpha: 1, y: 0 });
                    contador++;
                }
                else {
                    if (data == "lista-Alcohol" && contador==4) {
                        $alcohol.css('visibility', 'visible');        
                        TweenMax.fromTo($alcohol, 1, { autoAlpha: 0, y: -500 }, { autoAlpha: 1, y: 0 });
                        contador++;
                    }
                    else {
                        if (data == "lista-Aceite" && contador==5) {
                            $aceite.css('visibility', 'visible');        
                            TweenMax.fromTo($aceite, 1, {y: -500 }, { y: 0 });
                            contador++;
                        }
                        else {
                            if (data == "lista-Icopor" && contador==6) {
                                $bolaIcopor.css('visibility', 'visible');        
                                TweenMax.fromTo($bolaIcopor, 0.5, { y: -300 }, { y: 0 });
                                contador++;
                            } 
                            else {
                                $('#alert').css('visibility', 'visible');
                                $('#wrong').css('visibility', 'visible');
                                $('#right').css('visibility', 'hidden');
                                 contador = null;
                            }
                        }
                    }
                    
                }
            }
            
        }
       
    }

    if (contador == 7) {
        $('#alert').css('visibility', 'visible');
        $('#right').css('visibility', 'visible');
        $('#wrong').css('visibility', 'hidden');
    }

   /*ev.target.appendChild(document.getElementById(data));*/ 
    document.getElementById(data).style.visibility = "hidden";
   
    
}

//animaciones

function reload() {
    TweenMax.fromTo($refrescar, 1, {transformOrigin: 'center',rotation: 0,ease: Power2.easeOut},{transformOrigin: 'center',rotation: 360})  
}

function animacion1(a) {
    if (a == "adelante") {
        TweenMax.to($adelante, 0.5, {scale:1.2})  
    }
    if (a == "atras") {
        TweenMax.to($atras, 0.5, {scale:1.2})  
    }
    
}
function animacion2(a) {
    if(a=="adelante")
        TweenMax.to($adelante, 0.5, { scale: 1.0 })
    if (a == "atras") {
        TweenMax.to($atras, 0.5, { scale: 1.0 })
    }
}


   /* balanza de densida 3 */

   
    TweenMax.to($balin, 2, { y: 9,onStart:showSix ,onRepeat: showSix, repeat: -1 });

    /* onStart solo se ejecuta una vez al inicio. Se envía la misma función al
    inicio y al final para que el efecto arranque desde la priemrea vez, si no,
    solo se efectúa a partir de la segunda */
    
        function showSix() {
        
        TweenMax.fromTo($('#_6'),0.5, {autoAlpha:0, delay:1}, {autoAlpha:1, delay:1});TweenMax.fromTo($('#_0c'),0.5, {autoAlpha:1, delay:1}, {autoAlpha:0, delay:1});  
    } 


    /*Para el ejercicio2 */
    function showSixej2() {
        
        TweenMax.fromTo($('#_x35_'), 0.2, { autoAlpha: 0, delay: 0.4 }, { autoAlpha: 1, delay: 0.4 });
        TweenMax.fromTo($('#_0b'), 0.2, { autoAlpha: 1, delay: 0.4 }, { autoAlpha: 0, delay: 0.4 });
        }  
    function hideSixej2() {
            
            TweenMax.fromTo($('#_0b'), 0.2, { autoAlpha: 0, delay: 0.4 }, { autoAlpha: 1, });
            TweenMax.fromTo($('#_x35_'), 0.2, { autoAlpha: 1, delay: 0.4 }, { autoAlpha: 0, });
    } 
    
    function showSixej3() {
        
        TweenMax.fromTo($('#_x32_'), 0.2, { autoAlpha: 0, delay: 0.4 }, { autoAlpha: 1, delay: 0.4 });
        TweenMax.fromTo($('#_0b'), 0.2, { autoAlpha: 1, delay: 0.4 }, { autoAlpha: 0, delay: 0.4 });
    }
    
    function hideSixej3() {
        
        TweenMax.fromTo($('#_0b'), 0.2, { autoAlpha: 0, delay: 0.4 }, { autoAlpha: 1, });
        TweenMax.fromTo($('#_x32_'), 0.2, { autoAlpha: 1, delay: 0.4 }, { autoAlpha: 0, });
} 




/*TweenMax.to($balin, 2, { y: 9, repeat: -1 });*/
/*TweenMax.to($balin, 2, {
    cycle: {
        y: 9
    }
});*/
/*TweenMax.fromTo($('#_6'),0.1, {autoAlpha:0, repeat: -1, delay:2 }, {autoAlpha:1, repeat:-1, delay:2});*/


/*TweenMax.fromTo($bolaIcopor, 1, { alpha: 0, y:-5,delay: 3.5}, { alpha: 1, y: 9, delay:3.5});
TweenMax.fromTo($glicerina, 1, { alpha: 0, delay:3, y:-500 }, { alpha: 1, delay:3, y:0});
TweenMax.fromTo($alcohol, 1, { alpha: 0, delay: 2.5, y:-500 }, { alpha: 1, delay: 2.5, y:0});
TweenMax.fromTo($agua, 1, { alpha: 0, delay: 2, y:-500 }, { alpha: 1, delay:2, y:0 });
TweenMax.fromTo($aceite, 1, { alpha: 0, delay: 1.5, y:-500 }, { alpha: 1, delay: 1.5, y:0 });
TweenMax.fromTo($miel, 1, { alpha: 0, delay: 1, y:-500 }, { alpha: 1, delay: 1, y:0 });
TweenMax.fromTo($balin2, 1, { y:-500}, {  y:-20});*/

