function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra. <br/>" +
        "Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo. <br/>" +
        "Un palíndromo es una palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; " +
        "por ejemplo, anilina; dábale arroz a la zorra el abad.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const frase = prompt("Introduce una palabra o frase:");
    // Llamar a la función para verificar si es un palíndromo
    const resultado = verificarPalindromo(frase);
    document.getElementById("actividadEvaluableR").innerHTML = resultado;
}
function verificarPalindromo(frase) {
    // Eliminar los espacios en blanco y convertir la frase a minúsculas
    const fraseLimpia = frase.replace(/\s+/g, '').toLowerCase();

    // Invertir la frase
    const fraseInvertida = fraseLimpia.split('').reverse().join('');

    // Comparar la frase limpia con su versión invertida
    if (fraseLimpia == fraseInvertida) {
        return frase + " es un palíndromo.";
    } else {
        return frase + " no es un palíndromo.";
    }
}