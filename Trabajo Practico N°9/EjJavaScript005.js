let n1=prompt("Ingrese un numero para realizar calculos");
let n2=prompt("Ingrese otro numero");
var res=document.getElementById('salida')
function sumar(n1, n2) {
    $tol=parseInt(n1)+parseInt(n2);;
    res.value=$tol;
    }
function resta(n1, n2){
$tol=parseInt(n1)-parseInt(n2);;
res.value=$tol;

} 
function multiplicacion(n1, n2){
$tol=parseInt(n1)*parseInt(n2);;
res.value=$tol;

} 
function division(n1, n2){
$tol=parseInt(n1)/parseInt(n2);;
res.value=$tol;

}  