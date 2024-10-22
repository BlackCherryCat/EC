function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario un número N." +
        "La aplicación mostrará en la parte destinada para tal efecto, " +
        "todos los impares desde N (inclusive) hasta 1, con las siguientes condiciones: <br/>" +
        "Cada número se mostrará en una línea distinta. <br/>" +
        "Controlar que N siempre será mayor o igual a 1." +
        "En caso contrario, mostrar advertencia y volver a solicitar N.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num = parseInt(prompt("introduzca un número"));
    //Con un bucle que parte de 1, cada vuelta que de al añadir 2 siempre dara un impar, hasta llegar al numero introducido
    if (num >= 1) {
        let texto = "";
        for (let i = 1; i <= num; i += 2) {
            texto = texto + i + "<br/>";
        }
        //Mostrar resultado
        document.getElementById("actividadEvaluableR").innerHTML = texto;
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "El número introducido es menor que 2, este tiene que ser igual o mayor a 2";
    }
}