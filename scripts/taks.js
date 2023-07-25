// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
if(!localStorage.jwt){
  location.replace('./index.html');  //Si no se encuentra el jwt en el localstorage redirigimos a index.html
  }

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const urlTareas = 'https://todo-api.ctd.academy/v1/tasks';
  const urlUsuario = 'https://todo-api.ctd.academy/v1/users/getMe';
  const token = JSON.parse(localStorage.jwt);


  const btnCerrarSesion = document.querySelector('#closeApp');

  obtenerNombreUsuario();
  consultarTareas();
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   localStorage.clear();
   location.replace('./index.html');
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    
    const settings ={
      method: "GET",
      headers:{
        authorization:token
      }
    };

    fetch(urlUsuario,settings)
    .then(response =>response.json())
    .then(data=>{

      console.log('Nombre usuario:')
      console.log(data.firstName)
      
      const userName = document.querySelector('header .user-info p');
      userName.innerText = data.firstName
    });


  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const tareasPedientes = document.querySelector('ul.tareas-pendientes');
    const tareasCompletadas = document.querySelector('ul.tareas-terminadas')
    
    const settings = {
      mothod: "GET",
      headers:{
        authorization:token
      }
    }

    fetch(urlTareas,settings)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);

      data.forEach(task => {
        let tarea = `<li class='tarea' id='${task.id}' >
          ${task.description}
        </li>`
        if(task.completed){
          tareasCompletadas.innerHTML += tarea;
        }else{
          tareasPedientes.innerHTML += tarea;
        }
      });
    })


  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  /*formCrearTarea.addEventListener('submit', e=> {
    
    console.log('')



  });
  */


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});