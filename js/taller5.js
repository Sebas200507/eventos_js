let formulario = document.getElementById('formTaller5');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', calcular);
function calcular(){
    event.preventDefault();

    let primer_num = document.getElementById('primero').value;
    let segundo_num = document.getElementById('segundo').value;
    let operacion1 = document.getElementById('operacion').value;

    let primero = parseFloat(primer_num);
    let segundo = parseFloat(segundo_num);

    if (primer_num.trim() === '' || segundo_num.trim() === '') {
        resultado.innerText = 'Escribe los dos números.';
        resultado.className = 'error';
        return;
    }

    if (operacion1 === '') {
        resultado.innerText = 'Selecciona una operación.';
        resultado.className = 'error';
        return;
    }

   if (operacion1 === 'division' && segundo === 0) {
        resultado.innerText = 'No se puede dividir entre cero.';
        resultado.className = 'error';
        return;
   }

   let  total;
   let simbolo;

   switch (operacion1){
        case 'suma':
            total = primero + segundo;
            simbolo = '+';
            break;
        case 'resta':
            tota = primero - segundo;
            simbolo = '-'
            break;
        case 'multiplicacion':
            total = primero * segundo;
            simbolo = '*';
            break;
        case 'division':
            total = primero / segundo;
            simbolo = '/';
            break;
   }

   resultado.innerText = `${primero} ${simbolo} ${segundo} = ${total}`;
   resultado.className = 'exito';
}