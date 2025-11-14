function verificar(){
    let login = 1
    if(localStorage.getItem("login")){
        login = localStorage.getItem(login)
    }
    if(login == 0){
        location.href = "index.html"
    }
}

let usuarios = []

//Valida si existen usarios y los obtiene
if(localStorage.getItem(usuarios)){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}

function registrarse(){
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let contraseña = document.getElementById("contraseña").value

    let usuario = {
        "nombre": nombre,
        "email": email,
        "contraseña": contraseña
    }

    nombre.value = ""
    email.value = ""
    contraseña.value = ""

    usuarios.push(usuario)
    localStorage.setItem(usuarios, JSON.stringify(usuarios))
}