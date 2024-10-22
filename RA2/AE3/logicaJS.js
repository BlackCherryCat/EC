function verEnunciado() {
    let enunciado = "";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
function verResolucion() {
 
    let solucion = [[1, 0, 1], [1, 1, 1], [1, 1, 0]];
    let x = prompt("Introduzca cordenada x");
    let y = prompt("Introduzca cordenada y");
    if (solucion[x][y] == 0) {
        document.getElementById(x + y).innerHTML = "💣";
        alert("Perdiste");
    } else {
        document.getElementById(x + y).innerHTML = "💨"
        tablero[x][y] = 1;

    }
    let cont = 0;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == solucion[i][j]) {
                cont++
            }
        }
    }
    if (cont==9) {
        alert("has ganado")
    }

}