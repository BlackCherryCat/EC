function verEnunciado() {
    const enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una cadena de caracteres.Crea una función que reciba como argumento esa cadena de caracteres " +
        "y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const frase = prompt("Introduzca una frase");
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    for (let i = 0; i < frase.length; i++) {
        let char = frase.charAt(i);
        switch (char) {
            case 'a':
                a++
                break;
            case 'e':
                e++
                break;
            case 'i':
                i++
                break;
            case 'o':
                o++
                break;
            case 'u':
                u++
                break;
        }
    }
    document.getElementById("actividadEvaluableR").innerHTML = "El numero de vocales es <br/>" + "a:" + a + " e:" + e + " i:" + i + " o:" + o + " u:" + u

}