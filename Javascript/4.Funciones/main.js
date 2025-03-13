// 1. Función arrow
const getName = () => "Mar Carrion Borràs";
console.log(getName());

// 2. Función con nombre y sin return con un parámetro de tipo boolean
function typeBoolean(param) {
    console.log(param);
}
typeBoolean(true);

// 3. Función que reciba parámetros infinitos
function printNumbers(...values) {
    values.forEach(value => console.log(value));
}
printNumbers(1, 2, 3, 4, 5);