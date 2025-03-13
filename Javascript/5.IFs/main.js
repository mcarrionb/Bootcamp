// 1. Función que genera un número entre 0 y 1 y retorna cara o cruz
function getSide() {
    let num = Math.round(Math.random());
    if(num == 1){
        return "cara"
    }
    else{
        return "cruz"
    }
}
console.log(getSide());