//atributos
$adelante = $('#adelante');
$atras = $('#atras');
$refrescar = $('#refrescar');
$cuadroVerde = $('#cuadro-verde');
$balin = $('#balin');




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


