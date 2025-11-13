
function guardar(){
    const nombre = document.getElementById("nombre")

    // Guardar un dato
    localStorage.setItem('nombre', nombre.value)
    nombre.value = ""
}

function recuperar(){
    let nombre = localStorage.getItem("nombre")
    //Recuperar dato
    document.querySelector("h1").textContent = nombre
}

function precargar(){
    let nombre = localStorage.getItem("nombre")
    //Recuperar dato
    document.querySelector("input").value = nombre
}

function eliminar(){
    // Eliminar un solo elemento
    localStorage.removeItem('nombre');
}


function eliminar(){
    // Limpiar todo el almacenamiento
    localStorage.clear();
}

function objeto(){
    persona = {"nombre": "Deison", "edad": 25}
    localStorage.setItem("persona", JSON.stringify(persona))
}

function recuperar_objeto(){
    persona = JSON.parse(localStorage.getItem("persona"))
    document.querySelector("h1").textContent = persona.nombre + " " + persona.edad
}