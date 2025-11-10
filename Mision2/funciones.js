//Funciones
function saludar() {
    alert("¡Hola, mundo!");
}

//saludar();  // Imprime "¡Hola, mundo!"

//Funciones con parametros
function saludar_pmt(nombre, apellido) {
    console.log("¡Hola, " + nombre + " " + apellido +  "!");
}

saludar_pmt("Ana", "Perez");  // Imprime "¡Hola, Ana!"

//Funciones con retorno
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


function multiplicar(a, b) {
    return a * b;
}


function dividir(a, b) {
    return a / b;
}


resultado = sumar(5, 3);
console.log(resultado); 

resultado = restar(10, 5)
console.log(resultado)

resultado = multiplicar(2, 3)
console.log(resultado)

resultado = dividir(18, 6)
console.log(resultado)

//Funciones anonimas
let saludo = function() {
    console.log("Hola desde una función anónima");
};

saludo();  // Imprime "Hola desde una función anónima"

//Funciones de flecha
let multiplicacion = (x, y) => x * y;
console.log(multiplicacion(4, 5));  // Imprime 20

