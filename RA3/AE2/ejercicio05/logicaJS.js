function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un código de cliente." +
        " Dicho código contiene tres partes separadas por un guión: <br/>" +
        "Dos caracteres:  CP: cliente particular, CE: empresa <br/>" +
        "Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional <br/>" +
        "Una cifra que indica el número de años de antigüedad del cliente. <br/>" +
        "Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá informar del tipo de error o errores.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let usercode = prompt("Introduzca codigo")

    let parts = usercode.split('-');

    if (parts.length != 3 & parts[0] == "" | parts[1] == "" | parts[2] == "") {
        document.getElementById("actividadEvaluableR").innerHTML = "El código debe tener tres partes separadas por guiones";
        return;
    }

    let code = parts[0];
    let site = parts[1];
    let age = parts[2];

    let mess = "";

    switch (code.toUpperCase()) {
        case "CP":
            mess += "El código introducido pertenece a un cliente particular "
            break;
        case "CE":
            mess += "El código introducido pertenece a una empresa "
            break;
        default:
            document.getElementById("actividadEvaluableR").innerHTML = "El tipo de cliente no es valido"
            return;
    }
    switch (site) {
        case "10":
            mess += "de origen local con "
            break;
        case "11":
            mess += "de origen autonómico con "
            break;
        case "12":
            mess += "de origen nacional con "
            break;
        case "20":
            mess += "de origen internacional con "
            break;
        default:
            document.getElementById("actividadEvaluableR").innerHTML = "La localidad no es valida"
            return;
    }

    mess += age + " años de antigüedad"

    document.getElementById("actividadEvaluableR").innerHTML = mess
}

