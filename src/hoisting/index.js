// Hoisting - primero llamo la variable antes de asignarla / se elevan las variables

/*
    var nameOfDog; // undefined
*/

console.log(nameOfDog); // undefined
var nameOfDog = "Elmo";
console.log(nameOfDog); // Elmo

// Hoisting en funciones - se elevan las variabes  y las funciones

/*
    var elmo; // undefined
    function nameOfDog() {
        console.log(`El mejor perrito es ${elmo}`);
    }
    nameOfDog();
*/

nameOfDog(); // El mejor perrito es undefined

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmo";