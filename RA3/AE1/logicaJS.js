function verEnunciado() {
    let enunciado = "Escribir un correo electronico y devolverlo comprobando con una expresión regular (pudiendo usar test)." +
        +"Formatos de correo (contemplando mayúsculas):"
        +"carmelo@gmail.com" +
        +"carmelo@gmail.site" +
        +"carmelo-jaen@gmail.com" +
        +"carmelo_jaen.com" +
        +"carmelo.jaen@gmail.com" +
        +"carmelo@gmail.com.es"
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let email = "";
    email=prompt("Escribe un correo");
    const regex = $;
    if (regex.test(email.toLowerCase)) {
        document.getElementById("actividadEvaluableR").innerHTML = "Es válido"
    }else{
        document.getElementById("actividadEvaluableR").innerHTML = "No es válido"
    }
}