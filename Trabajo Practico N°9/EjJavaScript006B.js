let val=prompt("Ingrese un valor");
var res=document.getElementById('salida')
let tol;
val = parseInt(val);
    if (val<0) {
    tol=-1;
    
}
else if ((val>=0)&&(val<10)) {
    tol=0;
    
}
else if ((val>=10)&&(val<50)) {
    tol=1;
   
}
else if ((val>=50)&&(val<100)) {
    tol=2;
   
}
else if (val>=100) {
    tol=3;
    
}
res.value=tol;
