function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario un número N." +
        "La aplicación mostrará en la parte destinada para tal efecto, " +
        "todos los pares desde 2 hasta N (inclusive), con las siguientes condiciones: <br/>" +
        "Cada número se mostrará en una línea distinta. <br/>" +
        "Controlar que N siempre será mayor o igual a 2." +
        "En caso contrario, mostrar advertencia y volver a solicitar N.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num = parseInt(prompt("introduzca un número"));
    if (num >= 2) {
        let texto = "";
        for (let i = 2; i <= num; i+=2) {
            texto = texto + i + "<br/>";
        }
        document.getElementById("actividadEvaluableR").innerHTML = texto;
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "El número introducido es menor que 2, este tiene que ser igual o mayor a 2";
    }
}