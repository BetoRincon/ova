//atributos
$adelante = $('#adelante');
$atras = $('#atras');
$refrescar = $('#refrescar');
$cuadroVerde = $('#cuadro-verde');
$balin = $('#balin');
$balin2 = $('#balin2');
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




//carga de pag
$(document).ready(function () {
    $('#svg-fluidos').css('display', 'block');
    contador = 0;
    auth = false;

    if (window.location.href == "http://localhost/ova/densidad3.html") {
       
        Balanza();
    }
});

//eventos

$adelante.click(function () {
     
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
});

$atras.click(function () {
    
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
});

$refrescar.click(function () {
    reload();
    function loadPage() {
        location.reload();
        setTimeout(loadPage(), 3000);
    }
    /* https://www.w3schools.com/js/js_timing.asp */
    
    
});

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
    
     //para controlar la entrada de fluidos
    
    
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


function Balanza() {    
    TweenMax.to($balin, 2, { y: 9,onStart:showSix ,onRepeat: showSix, repeat: -1 });

    /* onStart solo se ejecuta una vez al inicio. Se envía la misma función al
    inicio y al final para que el efecto arranque desde la priemrea vez, si no,
    solo se efectúa a partir de la segunda */
    
        function showSix() {
        
        TweenMax.fromTo($('#_6'),0.5, {autoAlpha:0, delay:1}, {autoAlpha:1, delay:1});TweenMax.fromTo($('#_0c'),0.5, {autoAlpha:1, delay:1}, {autoAlpha:0, delay:1});  
    } 
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

