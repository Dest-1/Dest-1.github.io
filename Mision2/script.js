let persona = {
    nombre: "Deison",
    edad: 25
}

console.log(persona)
persona.nombre = "Carlos"
console.log(persona.nombre)

let lista = [1,2,3,4,5]
lista[2] = 10
console.log(lista)
console.log(lista[2])

let suma = 3+7
console.log("Suma: " + suma)

let resta = 3-7
console.log("Resta: " + resta)

let mult = 3*7
console.log("Multiplicación: " + mult)

let division = 10/3
console.log("División: " + division)

let residuo = 10%3
console.log("Residuo: " + residuo)

let x = 10;
x += 5; // x = 15
console.log("x+=5: " + x)
x *= 2; // x = 30
console.log("x*=2: " + x)

let a = 5;
let b = "5";
console.log(a == b); // Compara solo el contenido, no tiene en cuenta el tipo de dato = true
console.log(a === b); // Compara el tipo de dato = false

console.log(a != b); // Compara solo el contenido, no tiene en cuenta el tipo de dato = true
console.log(a !== b); // Compara el tipo de dato = false

let c = a < b
console.log("Menor o igual: " + c)

let edad = 67
console.log(edad > 10 && edad < 60) 