function verEnunciado() {
    let enunciado = "realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, su factorial. <br/>" +
        "Dado que solo se puede calcular el factorial de un número natural, si se introduce un número negativo mostrar un " +
        "mensaje de error y volver a pedir el número al usuario";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const num = prompt("Por favor, ingrese un número natural");

    // Controlar que el número sea válido
    if (num < 0) {
        document.getElementById("actividadEvaluableR").innerHTML = "Error: solo se puede calcular el factorial de un número natural.";
        return;
    }

    // Calcular el factorial del número
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    // Mostrar el factorial en la página
    document.getElementById("actividadEvaluableR").innerHTML = factorial
}