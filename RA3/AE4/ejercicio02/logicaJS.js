function verEnunciado() {
    const enunciado = `Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, 
    al usuario dos fechas y horas en formato XXXX/YY/ZZ HH:MM:SS.<br/><br/>

    Donde:<br/>
    XXXX es el año YY, el mes y ZZ, el día.<br/>
    HH son las horas en formato 24 horas, MM los minutos y SS, los segundos.<br/><br/>

    Crea una función que sea capaz de calcular el número de días y horas transcurridos entre esas dos fechas 
    y horas dadas . El resultado debe ser un valor absoluto, es decir, 
    es indiferente que el primer argumento sea una fecha anterior o posterior al segundo, 
    el resultado será un número de días y horas sin signo.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let resolucion = "";
    document.getElementById("actividadEvaluableR").innerHTML = resolucion
}