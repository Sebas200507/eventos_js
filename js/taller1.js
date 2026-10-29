let formulario = document.getElementById('formTaller1');
let resultado = document.getElementById('resultado')

formulario.addEventListener('submit', taller1);
function taller1(){
    event.preventDefault();
    let numero = parseFloat(document.getElementById('numero').value);

    if (isNaN (numero)){
        resultado.innerText = 'Escribe un número';
        resultado.className = 'error';
        return;
    }

    else if(numero % 1 !== 0){
        resultado.innerText = 'Escribe un número entero';
        resultado.className = 'error';
        return;
    }

    else if (numero %2 ==0){
        resultado.innerText = 'El numero es Par';
        resultado.className = 'exito';
        
    }

    else{
        resultado.innerText = 'El resultado es Impar';
        resultado.className = 'exito';
        
    };
};