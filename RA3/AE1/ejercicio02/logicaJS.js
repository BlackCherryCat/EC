function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se simule la pantalla de registro de una web." +
        "Para ello la aplicación solicita por pantalla, mediante una ventana emergente, al usuario unemail y una contraseña."
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
let email = "";
let pass = "";
function verResolucion() {

    email = prompt("Escribe un correo");
    const regexm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    while (!regexm.test(email)) {
        email = prompt("No es válido. Escribe un correo");
    }
    let emailcom = "";
    emailcom = prompt("Vuelva a escribir el correo");
    while (!email == emailcom) {
        emailcom = prompt("No coincide. Vuelva a escribir el correo");
    }

    pass = prompt("El email escogido es válido. Establezca una contraseña");
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%&?])(?!.*([#$@!%&?]).*\1)[A-Za-z\d#$@!%&?]{8,16}$/;
    while (!regexp.test(pass)) {
        pass = prompt("No es válido. Escribe una contraseña");
    }
    let passcom = "";
    passcom = prompt("Vuelva a escribir la contraseña");
    while (!pass == passcom) {
        emailcom = prompt("No coincide. Vuelva a escribir la contraseña");
    }
    document.getElementById("actividadEvaluableR").innerHTML =
        "<p>Email/contraseña configurados con éxito</p>" +
        "<input " +
        "type=\"button\" " +
        "name=\"botonEnunciado\" " +
        "value=\"Ingrese los datos de acceso para acceder a la web\" " +
        "onclick=\"Inicio();\" />"
}

function Inicio() {
    let emailcom = prompt("Escribe el correo");
    let passcom = prompt("Escribe la contraseña");
    for (let i = 0; i < 2; i++) {
        if (emailcom == email & passcom == pass) {
        } else {
            alert("Incorrecto, vuelva a introducir los datos")
            emailcom = prompt("Escribe el correo");
            passcom = prompt("Escribe la contraseña");
        }
    }
    if (emailcom == email & passcom == pass) {
        document.getElementById("actividadEvaluableR").innerHTML = "Desbloqueo exitoso"
    } else {
        document.getElementById("actividadEvaluableR").innerHTML = "Usuario bloqueado"
    }
}

