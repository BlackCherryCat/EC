function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, " +
        "mediante una ventana emergente, al usuario el número de horas trabajadas." +
        "La aplicación mostrará en la parte destinada para tal efecto, " +
        "el salario neto semanal de un trabajador en función del número de horas trabajadas y " +
        "la tasa de impuestos de acuerdo a las siguientes reglas: <br/>" +
        "Las primeras 35 horas se pagan a tarifa normal. <br/>" +
        "Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal. <br/>" +
        "Al sueldo bruto se le aplicarán las siguientes tasas de impuestos: <br/>" +
        "Los primeros 500 euros son libres de impuestos. <br/>" +
        "Los siguientes 400 tienen un 25 % de impuestos. <br/>" +
        "Los restantes un 45 % de impuestos.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let horas = parseInt(prompt("introduzca horas trabajadas"));
    let valorXhora = parseInt(prompt("introduzca valor por hora de trabajo"));
    let salario = 0;
    //Controlamos a base de condicionales, las condiciones que deben de cumplirse para obtener el salario neto
    if (horas <= 35) {
        salario = horas * valorXhora;
    } else {
        salario = horas * valorXhora;
        horas = horas - 35;
        salario = salario + ((horas * valorXhora) * 1.5);
    }
    if (salario <= 500) {
        document.getElementById("actividadEvaluableR").innerHTML = salario;

    } else if (salario <= 900) {
        imp = salario - 500;
        imp = imp * 0.25;
        document.getElementById("actividadEvaluableR").innerHTML = salario - imp;
    } else {
        imp = salario - 500;
        if (imp > 400) {
            imp = 400;
        }
        imp = imp * 0.25;
        imp2 = salario - 900;
        imp2 = imp2 * 0.45;
        document.getElementById("actividadEvaluableR").innerHTML = salario - imp - imp2;
    }
}