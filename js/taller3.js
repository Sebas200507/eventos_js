let formulario = document.getElementById('formTaller3');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', taller3) 
function taller3() {
    event.preventDefault();

    let numeroA = parseFloat(document.getElementById('numeroA').value);
    let numeroB = parseFloat(document.getElementById('numeroB').value);
    let numeroC = parseFloat(document.getElementById('numeroC').value);

    resultado.className = 'exito';

    if (isNaN(numeroA) || isNaN(numeroB) || isNaN(numeroC)) {
        resultado.innerText = 'Completa los tres números.';
        resultado.className = 'error';
        return;
    }


    if (numeroA === numeroB && numeroB === numeroC) {
        resultado.innerText = 'Los tres números son iguales.';
        return;
    }

    let mayor = numeroA;

    if (numeroB > mayor) {
        mayor = numeroB;
    }
    
    if (numeroC > mayor) {
        mayor = numeroC;
    }

    resultado.innerText = `El número mayor es ${mayor}.`;

}  
