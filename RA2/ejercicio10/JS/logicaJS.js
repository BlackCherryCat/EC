function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, " +
        "\"SI\", si el número es primo, \"NO\" en caso contrario. El número puede tomar los valores 1 <= número <= 10000.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num = parseInt(prompt("introduzca un numero"));
    let esprimo = true;
    //Controlamos el numero introducido y, si es valido, comprobamos si es divisible, partiendo del 2, entre todos los numero inferior al numero
    if (num <= 1 || num >= 10000) {
        document.getElementById("actividadEvaluableR").innerHTML = "introduce un número entre 1 y 10000"
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                esprimo = false;

            }
        }
        //Imprime el resultado
        if (esprimo) {
            document.getElementById("actividadEvaluableR").innerHTML = "SI"
        } else {
            document.getElementById("actividadEvaluableR").innerHTML = "NO"
        }
    }

}