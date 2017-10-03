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
$aceite = $('#glicerina-2');
$miel = $('#miel');





//carga de pag
$(document).ready(function () {
    $bolaIcopor.css('visibility', 'hidden');
    $balin2.css('visibility', 'hidden');
    $bolaIcopor.css('visibility', 'hidden');
    $glicerina.css('visibility', 'hidden');
    $alcohol.css('visibility', 'hidden');
    $agua.css('visibility', 'hidden');
    $aceite.css('visibility', 'hidden');
    $miel.css('visibility', 'hidden');
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
   /* alert(ev.currentTarget.id);*/
}

function drop(ev) {
    ev.preventDefault();
    /*obtener id de elemnto draggable*/
    var data = ev.dataTransfer.getData("text");
    /*alert(data);*/
    if (data == "lista-Icopor") {
        $bolaIcopor.css('visibility', 'visible');        
        TweenMax.fromTo($bolaIcopor, 0.5, {  y: -600 }, {  y: 0 });
    }
    if (data == "lista-Aceite") {
        $aceite.css('visibility', 'visible');        
        TweenMax.fromTo($aceite, 1, { alpha: 0, y: -500 }, { alpha: 1, y: 0 });
    }

    if (data == "lista-Alcohol") {
        $alcohol.css('visibility', 'visible');        
        TweenMax.fromTo($alcohol, 1, { alpha: 0, y: -500 }, { alpha: 1, y: 0 });
    }
    if (data == "lista-Agua") {
        $agua.css('visibility', 'visible');        
        TweenMax.fromTo($agua, 1, { alpha: 0, y: -500 }, { alpha: 1, y: 0 });
    }
    
    if (data == "lista-Glicerina") {
        $('#glicerina').css('visibility', 'visible');        
        TweenMax.fromTo($glicerina, 1, { alpha: 0, y: -500 }, { alpha: 1, y: 0 });
    }
    if (data == "lista-Miel") {
        $miel.css('visibility', 'visible');        
        TweenMax.fromTo($miel, 1, { alpha: 0, y: -500 }, { alpha: 1, y: 0 });
    }
    if (data == "lista-Balin") {
        $balin2.css('visibility', 'visible');        
        TweenMax.fromTo($balin2, 1, {  y: -500 }, { y: 0 });
    }
    document.getElementById(data).style.visibility = "hidden";
   ev.target.appendChild(document.getElementById(data));
    
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

TweenMax.to($balin, 2, { y: 9, repeat: -1 });

/*TweenMax.fromTo($bolaIcopor, 1, { alpha: 0, y:-5,delay: 3.5}, { alpha: 1, y: 9, delay:3.5});
TweenMax.fromTo($glicerina, 1, { alpha: 0, delay:3, y:-500 }, { alpha: 1, delay:3, y:0});
TweenMax.fromTo($alcohol, 1, { alpha: 0, delay: 2.5, y:-500 }, { alpha: 1, delay: 2.5, y:0});
TweenMax.fromTo($agua, 1, { alpha: 0, delay: 2, y:-500 }, { alpha: 1, delay:2, y:0 });
TweenMax.fromTo($aceite, 1, { alpha: 0, delay: 1.5, y:-500 }, { alpha: 1, delay: 1.5, y:0 });
TweenMax.fromTo($miel, 1, { alpha: 0, delay: 1, y:-500 }, { alpha: 1, delay: 1, y:0 });
TweenMax.fromTo($balin2, 1, { y:-500}, {  y:-20});*/

