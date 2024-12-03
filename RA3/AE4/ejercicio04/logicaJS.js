function verEnunciado() {
    const enunciado = `Crea una función/método para el objeto Date, denominada getWeek, que devuelva el número 
    de semana para la fecha introducida.<br/><br/> 

    Según la norma ISO 8601, las semanas comienzan en lunes y si el año comienza antes del viernes 
    esa es la semana 1 del año, en caso contrario esa es la última semana del año anterior. 
    Si el año termina antes del jueves esa última semana se cuenta como semana 1 del año siguiente.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const dateInput = prompt("Introduce una fecha en formato dd/mm/yyyy:");
    if (dateInput) {
        const partes = dateInput.split('/');
        const day = parseInt(partes[0], 10);
        const month = parseInt(partes[1], 10) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
        const year = parseInt(partes[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("Fecha no válida. Por favor, utiliza el formato dd/mm/yyyy.");
            return;
        }

        const date = new Date(year, month, day);
        document.getElementById("actividadEvaluableR").innerHTML = `El número de semana para la fecha introducida es ${getWeek(date)}`;
    }
}
function getWeek(fecha) {
    // Ajustar el día al jueves de la misma semana, en base a que las semanas empiezan en lunes
    fecha.setDate(fecha.getDate() + 3 - ((fecha.getDay() + 6) % 7));
    // Obtener el primer jueves del año
    const firstThursday = new Date(fecha.getFullYear(), 0, 4);
    // Ajustar el primer jueves al lunes de esa semana
    firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7));
    // Calcular la diferencia en semanas        //Esto se hace porque las fechas funcionan en milisegundos
    const weekDiff = (fecha - firstThursday) / (7 * 24 * 60 * 60 * 1000);
    // Redondear al entero más cercano y sumar 1 porque las semanas comienzan en 1
    return Math.floor(weekDiff) + 1;
};