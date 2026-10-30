let formulario = document.getElementById('formTaller4');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', validarRegistro);
function validarRegistro(){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let edad1 = document.getElementById('edad').value; 
    let edad = parseFloat(edad1);
    let correo = document.getElementById('correo').value;
    let clave = document.getElementById('clave').value;
    let confirmar = document.getElementById('confirmar').value;

    resultado.className = 'error';

    if (nombre.trim() === '') {
        resultado.innerText = 'Escribe tu nombre.';
        resultado.className = 'error';
        return;
    } 
    
    if (edad1.trim() === '') {
        resultado.innerText = 'Escribe tu edad.';
        resultado.className = 'error';
        return;
    } 
    
    if (isNaN(edad) || edad % 1 !== 0 || edad < 18 || edad > 100) {
        resultado.innerText = 'La edad debe ser un número entero entre 18 y 100.';
        resultado.className = 'error';
        return;
    } 
    
    if (correo.indexOf('@') === -1 || correo.indexOf('.') === -1) {
        resultado.innerText = 'Escribe un correo válido.';
        resultado.className = 'error';
        return;
    } 
    
    if (clave.trim() === '') {
        resultado.innerText = 'Escribe una contraseña.';
        resultado.className = 'error';
        return;
    }

    if (clave !== confirmar) {
        resultado.innerText = 'Las contraseñas no coinciden.';
        resultado.className = 'error';
        return;
    } 
    
    resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre.trim()}.`;
    resultado.className = 'exito';
};