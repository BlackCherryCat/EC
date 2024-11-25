function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos cadenas.<br/>" +
        "Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como argumentos dos palabras " +
        "o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor. " +
        "Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o minúsculas)";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let ph1 = prompt("Ingrese la primera palabra o frase").toLowerCase();
    let ph2 = prompt("Ingrese la segunda palabra o frase").toLowerCase();
    document.getElementById("actividadEvaluableR").innerHTML = "Caracteres en común: " + comChar(ph1, ph2);
}

function comChar(ph1, ph2) {
    // Eliminar espacios en blanco y convertir las cadenas a minúsculas
    ph1 = ph1.replace(" ", "").toLowerCase();
    ph2 = ph2.replace(" ", "").toLowerCase();

    let comunes = [];

    // Recorrer cada carácter de la primera cadena
    for (let i = 0; i < ph1.length; i++) {
        let char = ph1[i];

        // Verificar si el carácter está en la segunda cadena y no ha sido añadido ya
        if (ph2.includes(char) & !comunes.includes(char)) {
            comunes.push(char);
        }
    }

    // Ordenar los caracteres comunes de menor a mayor y devolverlos como una cadena
    return comunes.sort().join("");
}



