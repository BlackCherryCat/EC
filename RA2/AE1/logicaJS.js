var array = [];

function verEnunciado() {
    let enunciado = "Crea tu propia función push sin hacer uso de funciones predefinidas";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    introducirElArr(array);
    texto = " ";
    for (let i = 0; i < longitud(array); i++) {
        texto = texto  + array[i] + ", ";
    }
    document.getElementById("actividadEvaluableR").innerHTML = "Elementos del array: " + texto + " Longitud: " + longitud(array)
}

function introducirElArr(arr = []) {
    dato = prompt("introduce un dato")
    arr[longitud(arr)] = dato
}

function longitud(arr = []) {
    cont = 0;
    while (arr[cont] != undefined) {
        cont++
    };
    return cont;
}