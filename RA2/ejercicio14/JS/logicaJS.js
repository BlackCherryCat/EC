function verEnunciado() {
    let enunciado = "El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo " +
        "que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, " +
        "se obtiene la letra seleccionándola dentro de un array de letras.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const dni = parseInt(prompt("Por favor, ingrese su número de DNI"));

    // Controlar que el número de DNI sea válido
    if (dni < 0 || dni > 99999999) {
        document.getElementById("actividadEvaluableR").innerHTML = "El número de DNI debe ser un número entero positivo de 8 dígitos.";
        return;
    }

    // Ventana emergente para solicitar la letra del DNI
    const letra = prompt("Por favor, ingrese la letra de su DNI");

    // Controlar que la letra del DNI sea válida
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Calcular la letra del DNI según el método explicado anteriormente
    const resto = dni % 23;
    const letraCalculada = letras[resto];

    // Comprobar si la letra calculada coincide con la letra ingresada por el usuario
    if (letraCalculada != letra) {
        document.getElementById("actividadEvaluableR").innerHTML = "La letra del DNI que ha ingresado no es correcta. Por favor, inténtelo de nuevo.";
        return;
    }

    // Mostrar un mensaje indicando que el número y la letra de DNI son correctos
    document.getElementById("actividadEvaluableR").innerHTML = "El número y la letra de DNI son correctos."
}