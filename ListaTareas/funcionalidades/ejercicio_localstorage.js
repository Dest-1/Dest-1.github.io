let lista_personas = []

function guardar(){
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    let persona = {"nombre": nombre.value, "edad": edad.value}
    lista_personas.push(persona)
    localStorage.setItem("personas", JSON.stringify(lista_personas))
    nombre.value = ""
    edad.value = ""
}

const resultado = document.querySelector(".resultado")
function recuperar(){
    personas = JSON.parse(localStorage.getItem("persona"))
    resultado.innerHTML = ""
    fila1 = document.createElement("tr")
    head1 = document.createElement("th")
    head2 = document.createElement("th")
    head1.textContent = "Nombre"
    head2.textContent = "Edad"
    fila1.appendChild(head1)
    fila1.appendChild(head2)
    resultado.appendChild(fila1)

    for (let persona of lista_personas) {
        fila = document.createElement("tr")
        col1 = document.createElement("td")
        col2 = document.createElement("td")
        col1.textContent = persona.nombre
        col2.textContent = persona.edad
        fila.appendChild(col1)
        fila.appendChild(col2)
        resultado.appendChild(fila)
    }
}