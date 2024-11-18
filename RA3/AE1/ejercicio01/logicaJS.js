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
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    if (regex.test(email)) {
        document.getElementById("actividadEvaluableR").innerHTML = "Es válido"
    }else{
        document.getElementById("actividadEvaluableR").innerHTML = "No es válido"
    }
}