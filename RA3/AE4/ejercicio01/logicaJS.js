function verEnunciado() {
    const enunciado = `Realiza una aplicación web dónde se muestre en la parte destinada para tal efecto 
    la siguiente cadena de caracteres en función de la hora y el día. <br/><br/>

    “Buenos días, que tenga un feliz <diaSemana>” : de 6 de la mañana a las 12 del mediodía.<br/>
    “Buenas tardes, disfrute de su tarde del <diaSemana>” : de las 12 del mediodía hasta las 20h.<br/>
    “Buenas noches, le deseamos lo mejor para el <diaSemana> próximo” : de las 20h hasta las 6 de la madrugada.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let date = new Date();
    let day = date.toLocaleDateString('ES', { weekday: 'long' })
    let nextdate = new Date(date);
    nextdate.setDate(date.getDate() + 1)
    let nextday = nextdate.toLocaleDateString('ES', { weekday: 'long' })
    if (date.getHours() <= 6) {
        document.getElementById("actividadEvaluableR").innerHTML = `Buenas noches, le deseamos lo mejor para el ${nextday} próximo`
    } else if (date.getHours() <= 12) {
        document.getElementById("actividadEvaluableR").innerHTML = `Buenos días, que tenga un feliz ${day}`
    } else if (date.getHours() <= 20) {
        document.getElementById("actividadEvaluableR").innerHTML = `Buenas tardes, disfrute de su tarde del ${day}`
    }
}