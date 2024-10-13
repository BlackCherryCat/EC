function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario una secuencia de notas (con valores que van de 0 a 10, sin decimales). " +
        "La entrada acabará con el valor “-1”. La aplicación mostrará en la parte destinada para tal efecto, " +
        "\"SI\", si hay algún 10, \"NO\" en caso contrario.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num = [];
    let pos;

    while (num[num.length - 1] != -1){
        num.push(parseInt(prompt("introduzca una nota")));
    }

    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] == 10) {
           pos = true;
        }
    }

    if (pos) {
        document.getElementById("actividadEvaluableR").innerHTML = "SI";
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "NO";
    }
}