// 1. Switch - case para mostrar el mes del año
function getMonth(num) {
    switch (num) {
        case 1: return "Enero";
        case 2: return "Febrero";
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Septiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 12: return "Diciembre";
        default: 
            console.log("ERROR: No es un número válido.");
            break;
    }
}
console.log(getMonth(8));

// 2. Switch - case que transforma un string a número
function transformStringToNumber(num) {
    switch (num) {
        case "uno": return 1;
        case "dos": return 2;
        case "tres": return 3;
        case "cuatro": return 4;
        case "cinco": return 5;
        default:
            console.log("ERROR: No es un número válido.");
            break;
    }
}
console.log(transformStringToNumber("cuatro"));