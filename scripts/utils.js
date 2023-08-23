/* ---------------------------------- texto --------------------------------- */
function validarNombre(texto) {
    const regex = new RegExp(/^[A-Za-záéíóúñÑ ]+$/);
    const errorNombre = document.querySelector('#errorNombre');
    if(texto.lenght < 3){
        errorNombre.innerText = 'El nombre debe contener al menos 3 caracteres'
        return false;
    }else if(!regex.test(texto)){
        errorNombre.innerText = 'El nombre no puede contener caracteres especiales'
        return false;
    }else{
        return true;                    
    }
};

function validarApellido(texto) {
    const regex = new RegExp(/^[A-Za-záéíóúñÑ ]+$/);
    const errorApellido = document.querySelector('#errorApellido');
    if(texto.lenght < 3){
        errorApellido.innerText = 'El Apellido debe contener al menos 3 caracteres'
        return false;
    }else if(!regex.test(texto)){
        errorApellido.innerText = 'El Apellido no puede contener caracteres especiales' 
        return false;
    }else{
        return true;
    }   
};

function normalizarTexto(texto) {

}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    const regex = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
    const errorEmail = document.querySelector('#errorEmail');
    if(!regex.test(email)){
        errorMensaje.innerText = 'Email inválido'
        return false;
    }else{
        return true;
    }
}

function normalizarEmail(email) {
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
  const errorPass = document.querySelector('#errorPassword');
  if(!regex.test(contrasenia)){
    errorPass.innerText = 'La contraseña debe contener: \n• Al menos una letra mayuscula \n• Al menos una letra minuscula\n• Al menos un nùmero\n •Al menos 8 caracteres en total';
  }else{
    return true;
  }
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    const errorPassRep = document.querySelector('#errorPasswordRepetido');
    if(contrasenia_1 !== contrasenia_2){
        errorPassRep.innerText = 'Las contraseñas no coinciden';
        return false
    }else{
        return true;
    }
}

