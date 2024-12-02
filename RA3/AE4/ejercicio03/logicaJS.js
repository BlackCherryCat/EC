function verEnunciado() {
    const enunciado = `Crea una función que reciba como argumento esa fecha y devuelva el número 
    de días del mes introducido para ese año.<br/><br/>

    Recuerda: un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo (1500, 1600...) 
    que solo lo será si es divisible por 400.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const fechaInput = prompt("Ingrese una fecha en formato DD/MM/YYYY:");
        const partesFecha = fechaInput.split("/");
        if (partesFecha.length !== 3) throw new Error("Formato inválido");

        const dia = parseInt(partesFecha[0], 10);
        const mes = parseInt(partesFecha[1], 10) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
        const año = parseInt(partesFecha[2], 10);

        const fecha = new Date(año, mes, dia);
        if (isNaN(fecha) || fecha.getDate() !== dia || fecha.getMonth() !== mes || fecha.getFullYear() !== año) {
            throw new Error("Fecha inválida");
        }

        const numeroDias = calcularDiasDelMes(fecha);
        document.getElementById("actividadEvaluableR").innerHTML = `El mes ${mes + 1} del año ${año} tiene ${numeroDias} días.`;
}

function calcularDiasDelMes(fecha) {
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();

    // Crear una fecha del primer día del mes siguiente
    const primerDiaMesSiguiente = new Date(año, mes + 1, 1);

    // Restar un día para obtener el último día del mes actual
    const ultimoDiaMes = new Date(primerDiaMesSiguiente - 1);

    return ultimoDiaMes.getDate();
}

