let palabras=prompt("Ingrese un mensaje");
let mayu = document.getElementById("mayu")
let mins = document.getElementById("mins")
let tress = document.getElementById("tres")
let holaa = document.getElementById("hola")
let holaa2 = document.getElementById("hola2")
let tradu = document.getElementById("trad")

var a= new String();
var may = palabras.toUpperCase();
     mayu.innerHTML+="<p>"+ may +"</p>";

var min = palabras.toLowerCase();
     mins.innerHTML+="<p>"+ min +"</p>";

var tres = palabras.substr(5, 10);
     tress.innerHTML+="<p>"+ tres +"</p>";

     if (palabras.indexOf("hola")!== -1) {
           holaa.innerHTML+="<p>hola que tal</p>";
     }
 
     if (palabras.indexOf("hola")!== -1 ) {

         let aux=palabras.replace("hola", "");
         aux = aux.replace(/\s+/g, "");
           holaa2.innerHTML+="<p>"+ aux +"</p>";
     } 
const diccionario = {
  "hola": "hello",
  "mundo": "world",
  "buenos": "good",
  "días": "morning",
  "mi" : "my",
  "name" : "name",
  "es" : "is",
  "como" : "who are",
  "estas" : "you",
  
};

let palabra = palabras.split(" ");
let traducido = palabra.map(p => diccionario[p] || p).join(" ");
               tradu.innerHTML+="<p>"+ traducido +"</p>";
  