// 1. A partir de la pizza sustituimos los elementos por cervezas
let array1 = ['🍔','🥃','🍣','🍕','🍜','🍙','🍘','🥑']
let position = array1.indexOf('🍕');

array1.splice(position + 1, array1.length - position - 1, ...new Array(array1.length - position - 1).fill('🍺'));
console.log(array1);

// 2. Comrpovamos si existe un elemento que sea una piña
let array2 = ['🍕','🍕','🍍','🍕','🍕']
console.log(array2.includes('🍍'))

// 3. Quitamos la piña
let pineapplePosition = array2.indexOf('🍍');
array2.splice(pineapplePosition, 1)
console.log(array2)

// 3. A partir del siguiente array convierte las fresas en champis
let array3 = ['🍓','🍋','🍓','🍋','🍓']
for (let i = 0; i < array3.length; i++) {
    array3[i] = array3[i].replace('🍓', '🍄');
}
console.log(array3);

// 4. Añade el siguiente icono 😰 inmediatamente después de cada 🌶
let array4 = ['🌶','🥛','🌶','🥛','🌶','🥛']
for (let i = 0; i < array4.length; i++) {
    if (array4[i] === '🌶') {
        array4.splice(i + 1, 0, '😰');
        i++;
    }
}
console.log(array4);

// 5. Añade una carta comodín entre medio de dos cartas. Por ejemplo de esto: ['🎴','🃏','🎴'] a esto: ['🎴','🎴','🎴','🃏','🎴','🎴','🎴']
let array5 = ['🎴','🃏','🎴']
for (let i = 0; i < array5.length; i++) {
    if (array5[i] === '🃏') {
        array5.splice(i, 1, '🎴', '🃏', '🎴');
        i += 2;
    }
}
console.log(array5);