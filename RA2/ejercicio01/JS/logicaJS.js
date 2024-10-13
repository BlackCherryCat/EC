function verEnunciado() {
    let enunciado = "Realiza la logica de programacion para que el usuario <br/> \
        introduzca 3 valores por teclado, si al menos uno de ellos es mayor a 10, <br/> \
        mostrar en una ventana emergente \"ALGUNO MAYOR QUE DIEZ\", <br/> \
        en caso contrario mostrar \"NINGUNO MAYOR QUE DIEZ\"";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num1 = parseInt(prompt("introduzca un número"))
    let num2 = parseInt(prompt("introduzca un número"))
    let num3 = parseInt(prompt("introduzca un número"))
    if (num1 > 10 | num2 > 10 | num3 > 10) {
        document.getElementById("actividadEvaluableR").innerHTML = "\"ALGUNO MAYOR QUE 10\""
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "\"NINGUNO MAYOR QUE 10\""
    }
}