let botonDividir = document.getElementById('botonDividir');

botonDividir.addEventListener('click', dividir);
function dividir(event){
    
    event.preventDefault();

    let valor1 = parseFloat(document.getElementById('num1').value);
    
    let valor2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert ('Escribe los dos números.');
        return;
    }
    else {
        let resultado = valor1 / valor2;
        alert (`division: ${resultado}`);
    }
}