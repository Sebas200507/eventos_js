let formulario = document.getElementById('formTaller2');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', taller2);
function taller2(){
    event.preventDefault();
    let nota = parseFloat(document.getElementById('nota').value);
    let desempeno;
    let estado = 'Aprobado';
    resultado.className = 'exito';

    if (isNaN(nota)){
        resultado.innerText = 'Escribe la nota';
        resultado.className = 'error';
        return;
    }

    else if (nota < 0 || nota > 5){
        resultado.innerText = 'La nota debe ser 0.0 y 5.0';
        resultado.className = 'error';
        return;
    }

    else if (nota >= 4.5){
        desempeno = 'Excelente';
    }

    else if (nota >= 4){
        desempeno = 'Bueno';
    }

     else if (nota >= 3){
        desempeno = 'Aceptable';
    }

    else{
        desempeno = 'Insuficiente';
        estado = 'No Aprobado';
        resultado.className = 'error';
    }

    resultado.innerText = `Nota ${nota}: ${desempeno}, ${estado}`;
    
};