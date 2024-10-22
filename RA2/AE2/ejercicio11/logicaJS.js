function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, " +
        "al usuario una cantidad de dinero (controlar que sea múltiplo de 5) " +
        "y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes. <br/>" +
        "La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let cantidad = parseInt(prompt("introduzca una cantidad de dinero"));
    if (cantidad % 5 != 0) {
        document.getElementById("actividadEvaluableR").innerHTML = "La cantidad debe ser múltiplo de 5."
    } else {
        // Desglose el cambio en billetes
        let cambio = {
            500: parseInt(cantidad / 500),
            200: parseInt((cantidad % 500) / 200),
            100: parseInt(((cantidad % 500) % 200) / 100),
            50: parseInt((((cantidad % 500) % 200) % 100) / 50),
            20: parseInt(((((cantidad % 500) % 200) % 100) % 50) / 20),
            10: parseInt((((((cantidad % 500) % 200) % 100) % 50) % 20) / 10),
            5: parseInt(((((((cantidad % 500) % 200) % 100) % 50) % 20) % 10) / 5)
        };

        // Muestra el cambio en billetes
        let texto = " "
        if (cambio[500] != 0) {
            texto = texto + "<p>" + cambio[500] + " billete(s) de 500 euros</p>"
        }
        if (cambio[200] != 0) {
            texto = texto + "<p>" + cambio[200] + " billete(s) de 200 euros</p>"
        }
        if (cambio[100] != 0) {
            texto = texto + "<p>" + cambio[100] + " billete(s) de 100 euros</p>"
        }
        if (cambio[50] != 0) {
            texto = texto + "<p>" + cambio[50] + " billete(s) de 50 euros</p>"
        }
        if (cambio[20] != 0) {
            texto = texto + "<p>" + cambio[20] + " billete(s) de 20 euros</p>"
        }
        if (cambio[10] != 0) {
            texto = texto + "<p>" + cambio[10] + " billete(s) de 10 euros</p>"
        }
        if (cambio[5] != 0) {
            texto = texto + "<p>" + cambio[5] + " billete(s) de 5 euros</p>"
        }
        document.getElementById("actividadEvaluableR").innerHTML = texto
    }
}