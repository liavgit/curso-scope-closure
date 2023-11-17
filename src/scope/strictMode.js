'use strict';
pi = 3.1416;
console.log(pi); //pi is not defined - en modo no estricto si imprime pi

function myFunction(){
    'use strict';
    return pi = 3.14
}
console.log(myFunction()); //pi is not defined - en modo no estricto si imprime pi