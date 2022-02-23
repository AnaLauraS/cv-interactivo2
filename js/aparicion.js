function mostrar (a) {
    var x = document.getElementById(a);
   x.classList.replace('no-ver', 'ver');
   var z = document.getElementsByClassName(a);
    z[0].classList.add('mantener');
}

function cambiar (a) {
    var x = document.getElementById(a);
   x.classList.replace('ver', 'no-ver');
   var z = document.getElementsByClassName(a);
    z[0].classList.remove('mantener');
}

function cambiarTodo () {
    var y = document.querySelectorAll('.oculto');
    for (i=0; i<y.length; i++) {
       y[i].classList.replace('ver', 'no-ver');
    };
    var z = document.querySelectorAll('.titulos');
    for (i=0; i<z.length; i++) {
       z[i].classList.remove('mantener');
    };
}

function nueva(a) {
    var x = document.getElementById(a);
  if (x.classList.contains('ver')) {
      cambiar(a);
  }else{
      cambiarTodo();
      mostrar(a);
  };
};


function paraPresentacion (){
    var o = document.querySelector('.presentacion');
    var p = document.querySelector('.btn-ocultar');
    var t = document.querySelector('.btn-ver');
    if (o.classList.contains('no-ver')){
        o.classList.remove('no-ver');
        p.setAttribute('style', 'display: inline;')
        t.setAttribute('style', 'display: none;')
    } else {
        o.classList.add('no-ver');
        p.setAttribute('style', 'display: none;')
        t.setAttribute('style', 'display: inline;')
    }    
}

// para que aparezca la descripción del puesto en el grid
var texto1="Hacía cumplir las normas ISO, implementaba mejoras de procesos, resolvía la comunicación entre la parte técnica y los clientes, generaba reportes";
var texto2="Trabajaba todo lo que tenía que ver con la comunicación con lo empleados, incluidas las notas disciplinarias y suspensiones. Desarrollé proceso de liquidación efectivo y rápido";
var texto3="Me encargaba de organizar la producción y dirigir a los operarios, logrando en tres meses, reducir el atraso productivo. ¿Por qué dejé el puesto? Porque me tomé mi licencia por maternidad y cuando volví, estuve unos meses part-time";
var texto4="Básicamente dirigía un pequeño grupo de personas para que inventariaran correctamente";
var texto5="Tan simple como inventariar correctamente la mercadiría existente";
var texto6="A los 23 años abrí una remiseria en Palermo (Capital Federal) y gestioné el negocio por 3 años coordinando con choferes y clientes empresariales. La cerré por cuestiones personales";

function mostrarDesc (a) {
    document.querySelector('#desc').setAttribute('style', 'opacity: 1;');
    document.querySelector('#desc').innerHTML=a;
}
function noSeVe () {
    document.querySelector('#desc').setAttribute('style', 'opacity: 0;');
}

document.querySelector('.p1').addEventListener('mouseover', function () {mostrarDesc(texto1)});
document.querySelector('.p2').addEventListener('mouseover', function () {mostrarDesc(texto2)});
document.querySelector('.p3').addEventListener('mouseover', function () {mostrarDesc(texto3)});
document.querySelector('.p1').addEventListener('mouseout', function () {noSeVe()});
document.querySelector('.p2').addEventListener('mouseout', function () {noSeVe()});
document.querySelector('.p3').addEventListener('mouseout', function () {noSeVe()});

document.querySelector('.p4').addEventListener('mouseover', function () {    document.querySelector('#desc2').setAttribute('style', 'opacity: 1;');
document.querySelector('#desc2').innerHTML=texto4;});
document.querySelector('.p5').addEventListener('mouseover', function () {    document.querySelector('#desc2').setAttribute('style', 'opacity: 1;');
document.querySelector('#desc2').innerHTML=texto5;});
document.querySelector('.p4').addEventListener('mouseout', function () {document.querySelector('#desc2').setAttribute('style', 'opacity: 0;')});
document.querySelector('.p5').addEventListener('mouseout', function () {document.querySelector('#desc2').setAttribute('style', 'opacity: 0;')});
// fin de grid

// grid para pc
function mostrarDescL (a) {
    document.querySelector('#descGrande').setAttribute('style', 'opacity: 1;');
    document.querySelector('#descGrande').innerHTML=a;
}
function noSeVe2 () {
    document.querySelector('#descGrande').setAttribute('style', 'opacity: 0;');
}

document.querySelector('.p1').addEventListener('mouseover', function () {mostrarDescL(texto1)});
document.querySelector('.p2').addEventListener('mouseover', function () {mostrarDescL(texto2)});
document.querySelector('.p3').addEventListener('mouseover', function () {mostrarDescL(texto3)});
document.querySelector('.p1').addEventListener('mouseout', function () {noSeVe2()});
document.querySelector('.p2').addEventListener('mouseout', function () {noSeVe2()});
document.querySelector('.p3').addEventListener('mouseout', function () {noSeVe2()});
document.querySelector('.p4').addEventListener('mouseover', function () {mostrarDescL(texto4)});
document.querySelector('.p5').addEventListener('mouseover', function () {mostrarDescL(texto5)});
document.querySelector('.p6').addEventListener('mouseover', function () {mostrarDescL(texto6)});
document.querySelector('.p4').addEventListener('mouseout', function () {noSeVe2()});
document.querySelector('.p5').addEventListener('mouseout', function () {noSeVe2()});
document.querySelector('.p6').addEventListener('mouseout', function () {noSeVe2()});
// fin grid para pc

// interacción con formularios
var remotoSi = document.querySelector('#si-rem');
remotoSi.addEventListener('click', function () {
    document.querySelector('#pago').classList.replace('pago','form-vista')

});
var remotoNo = document.querySelector('#no-rem');
remotoNo.addEventListener('click', function () {
    document.querySelector('#pago').classList.replace('form-vista', 'pago');
    document.querySelector('#cantidad').classList.replace('form-vista', 'cantidad');
    document.getElementById('CV').style.opacity=0;
    document.getElementById('CV').classList.remove('animate__heartBeat');
    document.getElementById('CV').style.pointerEvents="none";
});
    //alertas
var alerta1="Solo me interesan trabajos remoto. Gracias";
var alerta2="Gracias, pero el sueldo ofrecido está por debajo de mis expectativas"
function mensaje(a) {alert(a)};

var pagoNo = document.querySelector('#pago-no');
pagoNo.addEventListener('click', function () {
    document.querySelector('#cantidad').classList.replace('cantidad','form-vista');
    document.getElementById('CV').style.opacity=0;
    document.getElementById('CV').classList.remove('animate__heartBeat');
    document.getElementById('CV').style.pointerEvents="none";
});
var pagoSi = document.querySelector('#pago-si');
pagoSi.addEventListener('click', function () {
    document.querySelector('#cantidad').classList.replace('form-vista', 'cantidad');
    document.getElementById('CV').style.opacity=1;
    document.getElementById('CV').classList.add('animate__heartBeat');
    document.getElementById('CV').style.pointerEvents="auto";
    //document.getElementById('CV').style.opacity=1;
    //document.getElementById('CV').style.pointerEvents="auto";
});

var btnProb = document.querySelector('#probar');
btnProb.addEventListener("click",function(event){
    var sueldo = document.getElementById("cBruto").value;
    event.preventDefault();
    if (sueldo>200000) {
        document.getElementById('CV').style.opacity=1;
        document.getElementById('CV').classList.add('animate__heartBeat');
        document.getElementById('CV').style.pointerEvents="auto";
        document.getElementById('CV').style.marginTop=0;
    } else {
        document.getElementById('CV').style.opacity=0;
        document.getElementById('CV').classList.remove('animate__heartBeat');
        document.getElementById('CV').style.pointerEvents="none";
    } ;
});

function ultMen () {
    var sueldo = document.getElementById("cBruto").value;
    if (sueldo<200000) {
        mensaje(alerta2);
    }
}
// fin formularios