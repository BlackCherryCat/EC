function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una cantidad de dinero (controlar que sea múltiplo de 5) " +
        "y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes. <br/>" +
        "La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let cantidad = parseInt(prompt("introduzca una cantidad de dinero"));
    if (cantidad % 5 !== 0) {
        document.getElementById("actividadEvaluableR").innerHTML = "La cantidad debe ser múltiplo de 5."
    } else {
        const cantidadNum = parseInt(cantidad);

        // Desglose el cambio en billetes
        const cambio = {
            500: parseInt(cantidadNum / 500),
            200: parseInt((cantidadNum % 500) / 200),
            100: parseInt(((cantidadNum % 500) % 200) / 100),
            50: parseInt((((cantidadNum % 500) % 200) % 100) / 50),
            20: parseInt(((((cantidadNum % 500) % 200) % 100) % 50) / 20),
            10: parseInt((((((cantidadNum % 500) % 200) % 100) % 50) % 20) / 10),
            5: parseInt(((((((cantidadNum % 500) % 200) % 100) % 50) % 20) % 10) / 5)
        };

        // Muestra el cambio en billetes
        const cambioHtml = `
        <h2>Cambio en Billetes:</h2>
        <ul>
            <li>500: ${cambio[500]}</li>
            <li>200: ${cambio[200]}</li>
            <li>100: ${cambio[100]}</li>
            <li>50: ${cambio[50]}</li>
            <li>20: ${cambio[20]}</li>
            <li>10: ${cambio[10]}</li>
            <li>5: ${cambio[5]}</li>
        </ul>
    `;
        document.getElementById("actividadEvaluableR").innerHTML = cambioHtml
    }
}