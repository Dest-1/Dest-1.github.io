// Selección por ID
const titulo = document.getElementById('miTitulo');
console.log(titulo)

// // Selección por clase
// const elementos = document.getElementsByClassName('miClase');

// // Selección por selector CSS
// const parrafo = document.querySelector('p');
// const todosLosParrafos = document.querySelectorAll('p');

function cambiar_titulo(){
    // Cambiar el texto de un elemento
    const titulo = document.getElementById('miTitulo');
    titulo.textContent = 'Nuevo Título Modificado';
}

function cambiar_parrafo(){
    // Cambiar el contenido HTML
    const parrafo = document.querySelector('p'); //Solo modifica el primero que encuentra
    parrafo.innerHTML = 'Párrafo <br> Modificado';
}

function buscar_parrafos(){
    const todosLosParrafos = document.querySelectorAll('p');
    console.log(todosLosParrafos)
}

function cambiar_atributos(){
    // Cambiar un atributo
    const enlace = document.querySelector('a');
    enlace.textContent = "Ir a Facebook"
    enlace.setAttribute('href', 'https://www.facebook.com');

    // Cambiar estilos
    const caja = document.querySelector('.miClase');
    caja.style.backgroundColor = 'blue';
    caja.style.color = 'white';
    caja.style.fontSize = '30px';
}

function crear_elemento(){
    // Crear un nuevo elemento
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    document.body.appendChild(nuevoDiv);
}

function eliminar_elemento(){
    // Eliminar un elemento
    const elementoParaEliminar = document.querySelector('div');
    elementoParaEliminar.remove();
}

function dato_entrada(){
    const titulo = document.getElementById("miTitulo")
    const entrada = document.getElementById("entrada")
    valor = entrada.value
    titulo.textContent = valor
}


