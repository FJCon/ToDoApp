/* ---------------------------------- texto --------------------------------- */
function validarNombre(texto) {
    const regex = ^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$;
    const errorNombre = document.querySelector('#errorNombre');
    if(texto.lenght < 3){
        errorNombre.innerText = 'El nombre debe contener al menos 3 caracteres'
        return false;
    }else if(!texto.test(regex)){
        errorNombre.innerText = 'El nombre no puede contener caracteres especiales'
        return false;
    }else{
        return true;
    }
};

function validarApellido(texto) {
    const regex = ^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$;
    const errorApellido = document.querySelector('#errorApellido');
    if(texto.lenght < 3){
        errorApellido.innerText = 'El Apellido debe contener al menos 3 caracteres'
        return false;
    }else if(!texto.test(regex)){
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
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const errorEmail = documet.querySelector('#errorEmail');
    if(!texto.test(regex)){
        errorMensaje.innerText = 'Email invàlido'
        return false;
    }else{
        return true;
    }
}

function normalizarEmail(email) {
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const errorPass = document.querySelector('#errorPassword');
  if(!contrasenia.test(regex)){
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

