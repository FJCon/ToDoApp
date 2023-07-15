/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    const regName = /^[a-zA-Z]+$/;
    const regNames = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let respuesta = '';

    if(texto.length <3){
        respuesta = 'Este campo debe tener al menos 3 caracteres'
    }else if(regName.test(texto) || regNames.test(texto)){
        console.log('Texto Válido')
    }else{
        respuesta = 'Solo se puden utilizar caractéres alfabéticos'
    }
    return respuesta
};

function normalizarTexto(texto) {
    
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let respuesta = ''
    if(regEmail.test(email) || email == ''){
        respuesta = 'El email no es válido';
    }
    return respuesta;
}

function normalizarEmail(email) {
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    let respuesta = ''
    if(contrasenia <6){
        respuesta = 'La contraseña debe tener al menos  caracteres'
    }
    return respuesta
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    
}

