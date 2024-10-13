function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario dos números X e Y. <br/>" +
        "La aplicación mostrará en la parte destinada para tal efecto, " +
        "la tabla de multiplicar del número X, hasta el valor Y, controlando las siguientes condiciones:<br/>" +
        "-50 <= X <= 50 <br/>" +
        "1 <= Y <= 20 <br/>" +
        "La tabla se mostrará con una entrada por línea y entre cada elemento habrá un único espacio de separación.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let X = parseInt(prompt("introduzca el número a multiplicar"));
    let Y = parseInt(prompt("introduzca el multiplicador"));
    if (X <= -50 || X >= 50) {
        document.getElementById("actividadEvaluableR").innerHTML = "el número a multiplicar tiene que ser entre -50 y 50";
    } else if (Y <= 1 || Y >= 20) {
        document.getElementById("actividadEvaluableR").innerHTML = "el multiplicador debe ser entre 1 y 20";
    } else {
        let texto = "";
        for (let i = 1; i <= Y; i++) {
            texto = texto + X + " x " + i + " = " + X * i + "<br/>"

        }
        document.getElementById("actividadEvaluableR").innerHTML = texto;
    }
}