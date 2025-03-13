let stringVar = "Hello World";
let numberVar = 8;
let booleanVar = true;
let arrayVar = [1, 2, 3, 4, 5];
let objectVar = { nombre: "Mar", edad: 29 };

console.log(typeof stringVar, stringVar);
console.log(typeof numberVar, numberVar);
console.log(typeof booleanVar, booleanVar);
console.log(typeof arrayVar, arrayVar);
console.log(typeof objectVar, objectVar);

/* Variables con scope local y global */
var globalVar = "Soy una variable global";

function newFunction(){
    var localVar = "Soy una variable local";
    console.log(localVar)
}