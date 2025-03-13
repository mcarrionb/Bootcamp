// 1. Función que sustituye las A por O
function replaceLetterA(str) {
    return str.replace(/a/gi, "o");
}
console.log(replaceLetterA("patata"));

// 2. Función que comprueba si el parámetro (palabra) empieza por "aca"
function startsWithAca(str) {
    return str.startsWith("aca");
}
console.log(startsWithAca("academia"));
console.log(startsWithAca("escuela"));

// 3. Función que repite un 'hola' 3 veces
function repeatHello(str) {
    console.log(`${str} `.repeat(3));
}
repeatHello("Hola");