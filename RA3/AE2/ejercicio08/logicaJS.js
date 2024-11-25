function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra. <br/>" +
        "Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo. <br/>" +
        "Un palíndromo es una palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; " +
        "por ejemplo, anilina; dábale arroz a la zorra el abad.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const phrase = prompt("Introduce una palabra o frase:");
    document.getElementById("actividadEvaluableR").innerHTML = verifyPalindrome(phrase);
}
function verifyPalindrome(phrase) {
    // Eliminar los espacios en blanco y pasarlo a minúsculas
    const phrase_wo_spac = phrase.replace(/\s/g, "").toLowerCase();

    // Invertir la frase
    const inversedPhrase = phrase_wo_spac.split('').reverse().join('');

    // Comparar la frase sin espacios con su versión invertida
    if (phrase_wo_spac == inversedPhrase) {
        return phrase + " es un palíndromo.";
    } else {
        return phrase + " no es un palíndromo.";
    }
}