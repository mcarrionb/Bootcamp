// 1. Función que suma 3 números
function sumNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sumNumbers(1,2,3))

// 2. Función que muestra el nombre
function showFullName(nombre, apellido1, apellido2) {
    return `${nombre} ${apellido1} ${apellido2}`;
}
console.log(showFullName("Mar", "Carrion", "Borràs"));

// 3. Función que devuelve el número más grande entre dos números
function getBiggerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(getBiggerNumber(8, 10));