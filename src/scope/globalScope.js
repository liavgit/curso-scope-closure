// variables

var a;          // declarar una variable
var b = 'b';    // declarar y asignar
var b = 'bb';   // reasignar
var a = 'aa';   // redeclarar una variable

// Ejemplo 1 - Global scope

var fruit = 'Apple';    //global

function bestFruit() {
    console.log(fruit);
}

bestFruit(); 

// *** Resultado: imprime Apple


// Ejemplo 2 - Global scope
function contries() {
    //variable no declarada, solo asignada ... global por accidente
    country = "Colombia"; //global 
    console.log(country);
}

contries(); 
console.log(country);

// *** Resultado: imprime Colombia Colombia