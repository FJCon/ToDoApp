window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const repass = document.querySelector('#inputPasswordRepetida');
    const spanNombre = document.querySelector('#inputNombreMensaje');
    const spanApellido = document.querySelector('#inputApellidoMensaje');
    const spanEmail = documet.querySelector('#inputEmailMensaje');
    const url = 'https://todo-api.ctd.academy/v1';



    /* -------------------------------------------------------------------------- */
    /*            VALIDACIONES EN EL FORMULARIO SIGN UP EN LADO CLIENTE           */
    /* -------------------------------------------------------------------------- */
    nombre.addEventListener('focusout', ()=>{
        const valor = nombre.value;
        spanNombre.innerText = validarTexto(valor);
    })
    apellido.addEventListener('focusout',()=>{
        const valor = apellido.value;
        spanApellido.innerText = validarTexto(valor);
    })

    email.addEventListener('focusout', ()=>{
        const email = email.value;
        spanEmail.innerText = validarEmail(email);
    })

    
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {  
        event.preventDefault();
        const payload = {
            "firstName": nombre.value,
            "lastName": apellido.value,
            "email": email.value,
            "password": pass.value
        };

        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{   
                'Content-Type': 'application/json'
            }
        };
        
        realizarRegister(settings);

        form.reset();
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        console.log('Enviando datos a la API');
        fetch(`${url}/users`, settings)
            .then(response =>{
                console.log(response);
                if(!response.ok){
                    alert('Datos incorrectos');
                }
                return response.json();
            })
            .then(data =>{
                console.log('Promesa cumplida');
                if(data.jwt){
                    localStorage.setItem('jwt', JSON.stringify(data.jwt)); //guardo en LocalStorage el objeto con el token
                    location.replace('./mis-tareas.html'); //redireccionamos a la página
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };


});