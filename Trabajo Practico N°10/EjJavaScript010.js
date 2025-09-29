var d = new Date();
let fechas = document.getElementById("fecha")
let navidads = document.getElementById("navidad")

let ahora = new Date();    
let navidad = new Date(ahora.getFullYear(), 11, 25);
let diferencia = navidad - ahora;

let segundos = Math.floor(diferencia / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

horas = horas % 24;
minutos = minutos % 60;
segundos = segundos % 60;

fechas.innerHTML+="<p>"+ `${d.toLocaleDateString()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`; +"</p>";
navidads.innerHTML+="<p> Dias para navidad: "+`${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos` +"</p>";