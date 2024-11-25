function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena y el carácter buscado. <br/>" +
        "Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}

function verResolucion() {
    let frase = prompt("Introduzca una frase");
    let char = prompt("Introduzca un caracter a buscar");
    let cont = 0
    let i = 0
    document.getElementById("actividadEvaluableR").innerHTML = buscaLetra(frase, char, cont, i)
}
function buscaLetra(frase, char, cont, i) {
    // Caso base: si 'i' ha alcanzado la longitud de la cadena
    if (i == frase.length) {
        return cont;
    }

    // Si el carácter en la posición i es igual al que buscamos
    if (frase.charAt(i) == char) {
        cont++;  // Incrementamos el contador
    }

    // Llamada recursiva: incrementamos 'i' para continuar buscando
    return buscaLetra(frase, char, cont, i + 1);
}
