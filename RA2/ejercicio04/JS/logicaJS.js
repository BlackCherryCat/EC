function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario una calificación numérica entre 0 y 10 (con decimales)." +
        "La aplicación mostrará en la parte destinada para tal efecto, " +
        "su transformación en calificación alfabética según la siguiente tabla. <br/>" +
        "De 0 a 3, Muy deficiente. <br/>" +
        "De 3 a 5, Insuficiente. <br/>" +
        "De 5 a 6, Bien. <br/>" +
        "De 6 a 9, Notable. <br/>" +
        "De 9 a 10, Sobresaliente.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let nota = parseFloat(prompt("introduzca una calificación"));
    switch (true) {
        case nota>=9:
            document.getElementById("actividadEvaluableR").innerHTML = "Sobresaliente.";
            break;

        case nota>=6:
            document.getElementById("actividadEvaluableR").innerHTML = "Notable.";
            break;

        case nota>=5:
            document.getElementById("actividadEvaluableR").innerHTML = "Bien.";
            break;

        case nota>=3:
            document.getElementById("actividadEvaluableR").innerHTML = "Insuficiente.";
            break;

        case nota>=0:
            document.getElementById("actividadEvaluableR").innerHTML = "Muy deficiente.";
            break;

        default:
            document.getElementById("actividadEvaluableR").innerHTML = "No es un número válido.";
            break;
    }
}