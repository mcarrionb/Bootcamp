// 1. Bucles con for y while que imrpimen 10 veces la frase "I ❤ code"
for (let i = 0; i < 10; i++) {
    console.log("I ❤ code");
}

let count = 0;
while (count < 10) {
    console.log("I ❤ code");
    count++;
}

// 2. Definimos y recorremos un array con las letras de la 'a' la 'e'
let letters = ['a', 'b', 'c', 'd', 'e'];
letters.forEach(letter => console.log(letter));

// 3. Definimos una variable let numero = 5 e iteramos hasta que el valor sea 0
let numero = 5;
while (numero > 0) {
    console.log(numero);
    numero--;
}
