function verEnunciado() {
    const enunciado = `Crea una función que reciba como argumento esa fecha y devuelva el número 
    de días del mes introducido para ese año.<br/><br/>

    Recuerda: un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo (1500, 1600...) 
    que solo lo será si es divisible por 400.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let resolucion = "";
    document.getElementById("actividadEvaluableR").innerHTML = resolucion
}