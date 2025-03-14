/* Funcionalidad con jQuery */
$("#jquery-btn").click(() => {
    $("#lorem-ipsum-paragraph-1").toggleClass("red-paragraph");
})

const btn = document.getElementById("javascript-btn")

/* Funcionalidad con javascript */
btn.addEventListener("click", () => {
    const paragraph = document.getElementById("lorem-ipsum-paragraph-2");
    paragraph.classList.toggle("blue-paragraph");
})