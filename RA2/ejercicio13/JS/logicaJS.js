function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una secuencia de números enteros. <br/>" + "Adicionalmente, la aplicación pedirá al usuario un número " +
        "comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. " +
        "Tras ello se leerán X números en las próximas X ventanas emergentes. <br/>" +
        "La aplicación mostrará en la parte destinada para tal efecto, la línea en orden inverso.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let numElementos = prompt("Por favor, ingrese el número de elementos de la secuencia (del 1 al 100)");

    // Controlar que el número de elementos sea válido
    if (numElementos < 1 || numElementos > 100) {
        document.getElementById("actividadEvaluableR").innerHTML = "El número de elementos debe ser del 1 al 100.";
        return;
    }

    // Ventana emergente para solicitar los números de la secuencia
    let secuencia = [];
    for (let i = 1; i <= numElementos; i++) {
        const numero = prompt("Por favor, ingrese el " + i + " elemento de la secuencia");
        secuencia[i - 1] = parseInt(numero);
    }
    
    let texto="";
    for (let i = numElementos-1; i >= 0; i--) {
        texto = texto + secuencia[i] + " ";
    }
    document.getElementById("actividadEvaluableR").innerHTML = texto
}