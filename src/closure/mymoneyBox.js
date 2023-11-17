//Alcancia mala

function moneyBox1(coins) {
    let savedCoins1 =0;
    savedCoins1 += coins;
    console.log(`MoneyBox: $${savedCoins1}`);
}

moneyBox1(5);    // MoneyBox: $5
moneyBox1(5);    // MoneyBox: $5

//Alcancia buena

function moneyBox() {
    // cada vez que se abre una cuenta nueva empieza en cero
    let savedCoins =0;
    console.log(`MoneyBox - valor de savedCoins es: $${savedCoins}`);
    
    // closure
    function countCoins(coins) {
        console.log(`countCoins - valor de savedCoins al entrar es: $${savedCoins}`);
        savedCoins += coins;
        console.log(`countCoins - valor de savedCoins al salir es: $${savedCoins}`);
        console.log(`MoneyBox: $${savedCoins}`);
    }
    return countCoins;
}

const mymoneyBox = moneyBox();

mymoneyBox(5);      // MoneyBox: $5
mymoneyBox(5);      // MoneyBox: $10
mymoneyBox(15);     // MoneyBox: $25

const moneyBoxAna = moneyBox();

moneyBoxAna(10);     // MoneyBox: $10
moneyBoxAna(20);     // MoneyBox: $30
moneyBoxAna(5);      // MoneyBox: $35