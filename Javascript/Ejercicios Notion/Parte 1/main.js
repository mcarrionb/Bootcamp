// 1. Comanda
const dinner = [];
dinner.push('🍔');
dinner.push('🌭');

console.log(dinner);

// 2. 1ª reclamación
dinner.push('🍟', '🍟');
console.log(dinner);

// 3. 2ª reclamación
//dinner.push('🥤','🥤')
dinner[dinner.length] = '🥤';
dinner[dinner.length] = '🥤';
console.log(dinner)