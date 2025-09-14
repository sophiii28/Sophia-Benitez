let funcion= document.getElementById("funcion");
for (let i = 0; i < 100; i++) {
    let resultado = (3 * i) + 5 - Math.pow(i, 2);
     funcion.innerHTML+="<p>"+ resultado +"</p>";
    
    
}