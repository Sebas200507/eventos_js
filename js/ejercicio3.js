document.getElementById('botonMulti').addEventListener
('click', function (event){

    event.preventDefault();

    let valor1 = parseFloat(document.getElementById('num1').value);
    let valor2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(valor1) || isNaN(valor2)){

        alert ('Escribe los 2 numeros');
        return;
    }
    else{
        alert(`Multiplicacion: ${valor1 * valor2}`);
    }

});
