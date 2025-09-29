function cumple() {
    let cump = document.getElementById("cump")

    var d = new Date();
   let fecha=prompt("Ingrese su año de nacimiento");
   diferencia=d.getFullYear()- fecha;
   return diferencia


}
let edad = cumple();
cump.innerHTML+="<p> Edad:"+ edad+"</p>";