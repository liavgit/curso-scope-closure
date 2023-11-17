/*
    En este desafío tendrás que crear un closure que nos permita almacenar 
    datos de mascotas en cualquier momento.
    Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. 
    En el primer llamado a la función nos servirá para crear nuestra lista en un inicio
    mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.
    Si en algún momento llamamos a la función sin pasarle ningún parámetro 
    esta nos devolverá el array con los datos de todos las mascotas introducidas.

    Input:
    const myPetList = createPetList();
    myPetList("michi");
    myPetList("firulais");
    myPetList();

    Output:
    ["michi", "firulais"]
*/

function createPetList() {
    
    let petList = [];
    console.log(`createPetList - valor de petList es: ${petList}`);

    function addPet(pet) {
        console.log(`addPet - valor de petList al entrar es: ${petList}`);
        if (pet){
            petList.push(pet);
        }
        console.log(`addPet - valor de petList al salir es: ${petList}`);
        return petList;
    }
    return addPet; 
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

/*
createPetList - valor de petList es: 
addPet - valor de petList al entrar es: 
addPet - valor de petList al salir es: michi
addPet - valor de petList al entrar es: michi
addPet - valor de petList al salir es: michi,firulais
addPet - valor de petList al entrar es: michi,firulais
addPet - valor de petList al salir es: michi,firulais
*/