function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario su sueldo (sin decimales) y los años de antigüedad. " +
        "La aplicación mostrará en la parte destinada para tal efecto, el sueldo resultante: <br/>" +
        "Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, triplicar el sueldo. <br/>" +
        "Si el sueldo es inferior a 500, pero su antigüedad es menor a 10 años, doblar sueldo. <br/>" +
        "Si el sueldo es mayor o igual a 500, mostrar sin cambios";
    document.getElementById("actividadEvaluable").innerHTML = enunciado;
}
function verResolucion() {
    let salario = parseInt(prompt("introduzca salario"));
    let años = parseInt(prompt("introduzca años de antigüedad"));
    switch (true) {
        case salario < 500 & años >= 10:
            document.getElementById("actividadEvaluableR").innerHTML = salario * 3;
            break;

        case salario < 500 & años < 10:
            document.getElementById("actividadEvaluableR").innerHTML = salario * 2;
            break;

        default:
            document.getElementById("actividadEvaluableR").innerHTML = salario;
            break;
    }
}