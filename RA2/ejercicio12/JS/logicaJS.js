function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una secuencia de números enteros. <br/> Adicionalmente, la aplicación pedirá al usuario un número " +
        "comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. " +
        "Tras ello se leerán X números en las próximas X ventanas emergentes. <br/>" +
        "La aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada uno en una línea distinta.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const numElementos = prompt("Por favor, ingrese el número de elementos de la secuencia (del 1 al 100)");

    // Controlar que el número de elementos sea válido
    if (numElementos < 1 || numElementos > 100) {
        document.getElementById("actividadEvaluableR").innerHTML = "El número de elementos debe ser del 1 al 100.";
        return;
    }

    // Ventana emergente para solicitar los números de la secuencia
    let max = -Infinity;
    let min = Infinity;
    for (let i = 1; i <= numElementos; i++) {
        let numero = parseInt(prompt("Por favor, ingrese el " + i + " elemento de la secuencia"));
        if (numero > max) {
            max = numero;
        }
        if (numero < min) {
            min = numero;
        }
    }

    // Muestra el número más alto y el más bajo
    let texto =
        "<p>Número más alto: " + max + "</p>" +
        "<p>Número más bajo: " + min + "</p>";
    document.getElementById("actividadEvaluableR").innerHTML = texto
}