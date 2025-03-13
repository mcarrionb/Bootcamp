/* Declaramos el array */
let array = ['🍍','🌶️','🍔','🥃'];

/* Mostramos el array por pantalla */
showResult()

/* Acciones al clicar los distintos botones */
$("#push-btn").click(() => {
    array.push('🍍');
    showResult()
});

$("#unshift-btn").click(() => {
    array.unshift('🌶️');
    showResult();
})

$("#insert-at-btn").click(function(){
    let position = $("#add-item-input").val();
    array.splice(position, 0, '👋🏼')
    showResult()
})

$("#pop-btn").click(() => {
    array.pop();
    showResult()
})

$("#shift-btn").click(() => {
    array.shift();
    showResult()
})

$("#remove-at-btn").click(() => {
    let position = $("#remove-item-input").val();
    array.splice(position, 1)
    showResult()
})

/* Mostramos el resultado */
function showResult(){
    let result = $("#result");
    result.text(`[${array}]`);
    updateInputs();
}

/* Actualizamos los atributos max de los inputs */
function updateInputs(){
    let arrayLength = array.length;
    $("#remove-item-input").attr("max", arrayLength)
    $("#add-item-input").attr("max", arrayLength)
}