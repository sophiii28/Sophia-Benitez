let n1=prompt("Ingrese el numero");
var res=document.getElementById('salida')
function Dolarxpeso(n1) {
    $tol=parseFloat(n1)*parseFloat(1,363);
    res.value=$tol;
    }
function pesoxdolar(n1) {
    $tol=parseFloat(n1)/parseFloat(1,363);
    res.value=$tol;
    }
function realxpeso(n1) {
    $tol=parseFloat(n1)*parseFloat(251);
    res.value=$tol;
    }
function pesoxreal(n1) {
    $tol=parseFloat(n1)/parseFloat(251);
    res.value=$tol;
    }
 function euroxpeso(n1) {
    $tol=parseFloat(n1)*parseFloat(1,592);
    res.value=$tol;
    }
function pesoxeuro(n1) {
    $tol=parseFloat(n1)/parseFloat(1,592);
    res.value=$tol;
    }