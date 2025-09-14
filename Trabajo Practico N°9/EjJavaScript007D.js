let factorialDiv = document.getElementById("factorial");
let n = prompt("Ingrese un numero para saber su factorial");
n = parseInt(n);

function facto(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * facto(num - 1);
    }
}

let resultado = facto(n);
factorialDiv.innerHTML += "<p>" + resultado + "</p>";