const sayHello = () => {return ("hello")} // jak jest w nawiasach a niema reture to nie zwraca
const sayHello2 = () => ("Hello"); // zwraca nam console.log
function sayHello3() {
    return "Siemka"
}

console.log(sayHello() + ", Marcin")
console.log(sayHello2() + ", Marcin")
console.log(sayHello3() + ", Marcin")


module.exports = {
    sayHello,
    sayHello3,
    sayHello2
}

console.log("plik function.js został załadowany prawidłowo")
