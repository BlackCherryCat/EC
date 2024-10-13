function verEnunciado() {
    let enunciado = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, "+
    "al usuario una cantidad de dinero (controlar que sea múltiplo de 5) "+
    "y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes. <br/>"+
    "La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num=parseInt(prompt("introduzca una cantidad de dinero"));
    if (num%5==0) {
        document.getElementById("actividadEvaluableR").innerHTML = resolucion
    } else {
        
    }
}