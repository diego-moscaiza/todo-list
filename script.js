// Definiendo constantes obteniendo nodos del HTML
const input = document.getElementById('ingresar-tarea')
const boton = document.getElementById('btn-crear-tarea')
const listaDeTareas = document.getElementById('lista-de-tareas')

// Definiendo funciones

// Funcion para agregar tareas
function agregarTarea() {
    // Ingresará datos solo si hay caracteres pero no espacios vacios.
    if (input.value.trim().length !== 0) {
        // Crear tarea
        let tareaNueva = document.createElement('li')
        tareaNueva.classList.add('tarea')

        // Texto ingresado por el usuario
        let texto = document.createElement('p')
        texto.innerText = input.value
        tareaNueva.appendChild(texto);

        // Contenedor de botones
        let botones = document.createElement('div')
        botones.append(agregarBotonCheck(), agregarBotonEliminar())
        tareaNueva.append(botones);

        // Agregar tarea a la lista
        listaDeTareas.appendChild(tareaNueva)

        // Borrar contenido en la entrada de texto
        input.value = ""
    } 
    else {
        alert('No se permiten ingresar espacios vacios.\nPor favor, ingrese caractéres.');
    }
}

// Funcion para agregar botonCheck
function agregarBotonCheck() {
    // Agregar Iconos
    let iconoCompletarTarea = document.createElement('i')
    iconoCompletarTarea.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')

    // Aqui escuchamos el click y luego ejecuta la funcion 'completarTarea'
    iconoCompletarTarea.addEventListener('click', completarTarea)
    return iconoCompletarTarea
}

// Funcion para agregar botonEliminar
function agregarBotonEliminar() {
    let iconoEliminarTarea = document.createElement('i')
    iconoEliminarTarea.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    // Aqui escuchamos el click y luego ejecuta la funcion 'eliminarTarea'
    iconoEliminarTarea.addEventListener('click', eliminarTarea)
    return iconoEliminarTarea;
}

// Funcion para marcar tarea como completada
function completarTarea(ev) {
    let tarea = ev.target.parentNode.parentNode
    // toggle permite alternar una clase. si tiene la clase en el parametro la elimina y si no la agrega.
    tarea.classList.toggle('completada')
}

// Funcion para eliminar una tarea de la lista
function eliminarTarea(ev) {
    let tarea = ev.target.parentNode.parentNode
    tarea.remove()
}

// AddEventListener
boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        agregarTarea();
    }
})