function verEnunciado() {
    const enunciado = `Crea una función/método para el objeto Date, denominada getWeek, que devuelva el número 
    de semana para la fecha introducida.<br/><br/> 

    Según la norma ISO 8601, las semanas comienzan en lunes y si el año comienza antes del viernes 
    esa es la semana 1 del año, en caso contrario esa es la última semana del año anterior. 
    Si el año termina antes del jueves esa última semana se cuenta como semana 1 del año siguiente.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let resolucion = "";
    document.getElementById("actividadEvaluableR").innerHTML = resolucion
}