// VAR

console.log(gender)         // undefined
var gender = "male"         // Declarar  y asignar

var firstName;              // Declarar > Undefined - no tiene nada asignado
firstName = 'Laura';        // Asignar
console.log(firstName);     // Laura

var lastName = "Angarita";  // Declarar  y asignar
lastName = "Velasquez";     // Reasignar
console.log(lastName);      // Velasquez

var secondName= "Isabel";   // Declarar  y asignar 
var secondName= "Ana";      // Redeclaro...Reasignar
console.log(secondName);    // Ana

var x = 1
{
  var x = 2
  console.log(x)            // 2
}
console.log(x)              // 2 


// LET

console.log(fruta);         // ReferenceError: Cannot access 'fruta' before initialization
let fruta = "Sandia";       

let fruit = "Apple";        // Declarar  y asignar
fruit = "Kiwi";             // Reasignar
//let fruit = "Banana";     // Redeclarar - no es posible, ya existe

let x = 1
{
  let x = 2
  console.log(x)            // 2
}
console.log(x)              // 1

let y = 5
{
  console.log(y)            // ReferenceError: Cannot access 'y' before initialization
  let y = 10 
}
console.log(y)              // no alcanza a llegar aca  por el error

// CONST

const animal = "Dog";       // Declarar  y asignar
//animal = "Cat";           // Reasignar - no es posible reasignar una constante
console.log(animal);        // Dog
//const animal = "Snake";   // Redeclarar - no se puede redeclarar

const vehicles = [];        // Inicializar array
vehicles.push("Mazda");
console.log(vehicles);      // [ 'Mazda' ]
vehicles.pop();
console.log(vehicles);      // []