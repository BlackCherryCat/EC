function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una frase con letras y números. <br/>" +
        "Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let frase = prompt("Escriba una frase");
    document.getElementById("actividadEvaluableR").innerHTML = fraseSum(frase);
}
function fraseSum(frase) {
    let num = ""
    let sum = 0
    for (let i = 0; i < frase.length; i++) {
        if (!isNaN(parseInt(frase.charAt(i)))) {
            sum += parseInt(frase.charAt(i));
            num += parseInt(frase.charAt(i)) + " + ";
        }
    }
    return sum + " (" + num.substring(0, num.length - 3) + ")";
}