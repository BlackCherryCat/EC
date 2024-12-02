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
    const date1 = prompt("Introduce la primera fecha y hora (formato: YYYY/MM/DD HH:MM:SS):");
    const date2 = prompt("Introduce la segunda fecha y hora (formato: YYYY/MM/DD HH:MM:SS):");

        // Convertir las fechas en objetos Date
        const datetime1 = new Date(date1);
        const datetime2 = new Date(date2);

        // Validar si las fechas son válidas
        if (isNaN(datetime1.getTime()) || isNaN(datetime2.getTime())) {
            document.getElementById("actividadEvaluableR").innerHTML = "Por favor, introduce fechas válidas en el formato especificado.";
        }

        // Calcular la diferencia absoluta entre fechas en milisegundos
        let differenceMs = Math.abs(datetime1 - datetime2);

        // Crear un objeto base para manejar fechas
        const baseDate = new Date(0);
        const diffDate = new Date(baseDate.getTime() + differenceMs);

        // Obtener los días directamente
        const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

        // Obtener horas, minutos y segundos desde el objeto `Date` resultante
        const hours = diffDate.getUTCHours();
        const minutes = diffDate.getUTCMinutes();
        const seconds = diffDate.getUTCSeconds();

        // Mostrar el resultado en la página
        document.getElementById("actividadEvaluableR").innerHTML =
            `Diferencia: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`;
}