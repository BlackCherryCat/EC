function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario un día y mes en formato numérico. " +
        "La aplicación mostrará en la parte destinada para tal efecto \"SI\" si es navidad (el 25 del 12) " +
        "y \"NO\" en caso contrario.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num1 = parseInt(prompt("introduzca dia"))
    let num2 = parseInt(prompt("introduzca mes"))
    if (num1 == 25 & num2 == 12) {
        document.getElementById("actividadEvaluableR").innerHTML = "SI"
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "NO"
    }
}