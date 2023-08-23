window.addEventListener('load', ()=>{
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const repass = document.querySelector('#inputPasswordRepetida');
    
    const url = 'https://todo-api.ctd.academy/v1';



    /* -------------------------------------------------------------------------- */
    /*            VALIDACIONES EN EL FORMULARIO SIGN UP EN LADO CLIENTE           */
    /* -------------------------------------------------------------------------- */
    function validarDatos(){
        if( validarNombre(nombre.value) && validarApellido(apellido.value) && validarEmail(email.value) && validarContrasenia(pass.value) && compararContrasenias(pass.value, repass.value)){
            return true;
        }else{
            return false;
        }
    }
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {  
        console.log("Realizando un submit");
        event.preventDefault();
        if(validarDatos()){
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
        }
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        console.log("Lanzando la consulta a la API");
        fetch(`${url}/users`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    //guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página
                    location.replace('/mis-tareas.html');
                }
                
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };
    

});