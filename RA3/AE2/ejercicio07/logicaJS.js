function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras. <br/>" +
        "Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará " +
        "la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const phrase = prompt("Introduce una frase:");
    const word1 = prompt("Introduce la primera palabra:");
    const word2 = prompt("Introduce la segunda palabra:");

    document.getElementById("actividadEvaluableR").innerHTML = "Resultado: " + insert(phrase, word1, word2);
}

function insert(phrase, word1, word2) {
    const index = phrase.indexOf(word1);
    // Si la primera palabra está en la frase, insertamos la segunda detrás de ella
    if (index != -1) {
        // Dividir la frase en dos partes: antes de la primera palabra y después de la segunda
        const antes = phrase.slice(0, index + word1.length);
        const despues = phrase.slice(index + word1.length);

        // Crear la nueva frase con la segunda palabra insertada después de la primera
        return antes + " " + word2 + " " + despues;
    } else {
        // Si no se encuentra la primera palabra, devolver la frase original
        return phrase;
    }
}