window.addEventListener('load', function () {
    //https://todo-api.ctd.academy/#/
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const email = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const endpoint = 'https://todo-api.ctd.academy/v1';
    



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
      
        const payload = {
            email:email.value,
            password: pass.value
        };
        
        //Lo que se envia a la API/Servidor
        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json'
            }
        };
        
        realizarLogin(settings);

        form.reset(); // Limpia los campos del formulario
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        console.log('consulta API');

        fetch(`${endpoint}/users/login`, settings) //enviamos al endpoint el setting (request)
            .then(response =>{
                console.log('Peticion enviada')
                if(!response.ok){ 
                alert('Alguno de los datos es incorrecto') //Si hay algun error lo mostramos con una alerta
                }
                return response.json();
                })
            .then(data =>{
                console.log('Promesa cumplida');
                console.log(data);
                if (data.jwt) {  //de la respuesta, capturamos el jwt
                    
                    localStorage.setItem('jwt', JSON.stringify(data.jwt)); //guardo en LocalStorage el objeto con el token
                    
                    location.replace('./mis-tareas.html'); //redireccionamos a la página
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    }; 


});