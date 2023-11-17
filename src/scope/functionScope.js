// Ejemplo 2 - Function scope

function greeting() {
    let nombre = "Andres"
    console.log(nombre)

    if (nombre === "Andres") {
        console.log(`Hello ${nombre}`)
    }
}

greeting()              // Andres  + Hello Andres
console.log(nombre)     // ReferenceError: nombre is not defined