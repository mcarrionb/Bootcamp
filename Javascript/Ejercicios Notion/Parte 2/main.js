// 4. Orden de preparación de las comandas
const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
dinner.reverse();
console.log(dinner)
dinner.unshift('🍸');
console.log(dinner)

// 5. Una nueva comanda
const ticket01 = ['🍺', '🍺', '🥜'];
const ticket02 = ['🍺', '🥪', '🥙'];
// 5.1. Utilizando concat()
let combinedTicket1 = [];
combinedTicket1 = ticket01.concat(ticket02)
console.log(combinedTicket1)

// 5.2. Utilizando spread operator (...)
const combinedTicket2 = [...ticket01, ...ticket02];
console.log(combinedTicket2)

// 5.3. Utilizando push
let combinedTicket3 = [];
combinedTicket3.push.apply(combinedTicket3,ticket01)
combinedTicket3.push.apply(combinedTicket3,ticket02)
console.log(combinedTicket3)

// 5.4. Bucle for
let combinedTicket4 = [];
for(let i = 0; i < ticket01.length; i++){
    combinedTicket4.push(ticket01[i])
}
for(let i = 0; i < ticket02.length; i++){
    combinedTicket4.push(ticket02[i])
}
console.log(combinedTicket4)

// 5.5. Utilizando foreach
let combinedTicket5 = [];
ticket01.forEach(element => {
    combinedTicket5.push(element)
})
ticket02.forEach(element => {
    combinedTicket5.push(element)
})
console.log(combinedTicket5)

// 6. Pagan la cuenta
combinedTicket1.shift();
combinedTicket1.pop();
console.log(combinedTicket1)