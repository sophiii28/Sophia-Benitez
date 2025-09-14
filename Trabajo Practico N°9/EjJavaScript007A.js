var meses=["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let lista= document.getElementById("lista")
for (let i = 0; i < 12; i++) {
   
    lista.innerHTML+="<li>"+meses[i]+"</li>";
}
let lista2= document.getElementById("lista2")
var s=0;
while (s<12) {
   
  lista2.innerHTML+="<li>"+meses[s]+"</li>";
  s++;
}
let lista3= document.getElementById("lista3")
var d=0;
do {
 
  lista3.innerHTML+="<li>"+meses[d]+"</li>";
   d++;
} while (d<12);
let lista4= document.getElementById("lista4")
var f=0;
for (const f in meses) {
 
  lista4.innerHTML+="<li>"+meses[f]+"</li>";
  
  
}