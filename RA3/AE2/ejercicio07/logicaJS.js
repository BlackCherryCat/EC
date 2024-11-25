function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras. <br/>" +
        "Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará " +
        "la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const frase = prompt("Introduce una frase:");
    const palabra1 = prompt("Introduce la primera palabra:") + ":";
    const palabra2 = prompt("Introduce la segunda palabra:");
    // Llamar a la función para insertar la segunda palabra detrás de la primera
    const resultado = insertarPalabra(frase, palabra1, palabra2);
    document.getElementById("actividadEvaluableR").innerHTML = "Resultado: " + resultado;
}

function insertarPalabra(frase, palabra1, palabra2) {
    // Usar una expresión regular para buscar la palabra1 seguida de dos puntos
    const indice = frase.indexOf(palabra1);
    // Si la palabra1 está en la frase, insertamos palabra2 detrás de ella
    if (indice != -1) {
        // Dividir la frase en dos partes: antes de palabra1 y después de palabra1
        const antes = frase.slice(0, indice + palabra1.length);
        const despues = frase.slice(indice + palabra1.length);

        // Crear la nueva frase con la palabra2 insertada después de palabra1
        return antes + " " + palabra2 + " " + despues;
    } else {
        // Si no se encuentra palabra1, devolver la frase original
        return frase;
    }
}