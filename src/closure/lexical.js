const myGlobal = 0; 

function myFunction() {
    const myNumber = 1; 
    console.log(myGlobal)           // 0

    function parent() {             // funcion interna
        const inner = 2;
        console.log(myNumber);      // 1
        console.log(myGlobal);      // 0

        function child() {
            console.log(inner);     // 2
            console.log(myNumber);  // 1 
            console.log(myGlobal);  // 0
        }

        return child();
    }

    return parent();
}

myFunction();                       // 0 - 10 - 210