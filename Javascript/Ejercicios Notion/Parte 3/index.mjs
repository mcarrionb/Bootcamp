import { food } from "./food.mjs";
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

// 7. Calculando el total
function getCategories(){
    let categories = [];

    food.map((element)=>{
        if(!categories.includes(element["Category"])){
            categories.push(element["Category"]);
        }
    });

    return categories;
}

console.log(getCategories());

function calculateBill(){
    let price = 0;
    ticket.forEach((element) => {
        food.forEach((row) => {
            if(row["Icon"] == element){
                price += row["Price"]
            }
        })
    })
    console.log(price);
}

calculateBill();

// 8. Comanda raruna
const shake = ['🥛', '🍓', '🍌'];
let newShake = shake.join("+");
console.log(newShake)

// 9. Ordenando los tiquets
const tickets = [1, 100000, 21, 30, 4];
console.log(tickets.sort((a,b) => b - a));

// 10. Ordenando los tiquets (2)
const ticket01 = ['☕', '☕', '☕', '☕'];
const ticket02 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

// 11. Ordenando los tiquets (3)
