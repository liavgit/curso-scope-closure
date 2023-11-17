function greeting() {

    let username = "Laura";

    function displayUsername() {
        return `Hello ${username}`
    }

    return displayUsername;
}

const g = greeting();
console.log(g);         // la definicion >> [Function: displayUsername]
console.log(g());       // la ejecucion >> Hello Laura 