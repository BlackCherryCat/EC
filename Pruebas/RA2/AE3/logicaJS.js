function verEnunciado() {
    let enunciado = "Implementa el juego del buscaminas en JS.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}

let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let solucion = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let loose = false;
let victory = false;

function verResolucion() {
    tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    document.getElementById("actividadEvaluableR").innerHTML =
        "<p><a class=\"box\" id=\"00\" onclick=\"jugar(0,0);\">📦</a><a class=\"box\" id=\"01\" onclick=\"jugar(0,1);\">📦</a><a class=\"box\" id=\"02\" onclick=\"jugar(0,2);\">📦</a></p>" +
        "<p><a class=\"box\" id=\"10\" onclick=\"jugar(1,0);\">📦</a><a class=\"box\" id=\"11\" onclick=\"jugar(1,1);\">📦</a><a class=\"box\" id=\"12\" onclick=\"jugar(1,2);\">📦</a></p>" +
        "<p><a class=\"box\" id=\"20\" onclick=\"jugar(2,0);\">📦</a><a class=\"box\" id=\"21\" onclick=\"jugar(2,1);\">📦</a><a class=\"box\" id=\"22\" onclick=\"jugar(2,2);\">📦</a></p>";
    for (let i = 0; i < solucion.length; i++) {
        for (let j = 0; j < solucion[i].length; j++) {
            solucion[i][j] = Math.floor(Math.random());
        }
    }
    console.log(solucion);
}

function jugar(x, y) {
    if (loose | victory) {
        verResolucion();
        loose = false;
        victory = false;
    }

    if (solucion[x][y] == 0) {
        document.getElementById(x + "" + y).innerHTML = "💥";
        document.getElementById("actividadEvaluableR").innerHTML += "<p>Perdiste</p> <p>Pulsa cualquier casilla o Ver resolución para reintentar</p>";
        loose = true;
    } else {
        document.getElementById(x + "" + y).innerHTML = "💨";
        tablero[x][y] = 1;
    }

    if (JSON.stringify(tablero) == JSON.stringify(solucion) | loose) {
        for (let i = 0; i < solucion.length; i++) {
            for (let j = 0; j < solucion[i].length; j++) {
                if (solucion[i][j] == 0) {
                    document.getElementById(i + "" + j).innerHTML = "💣";
                } else {
                    document.getElementById(i + "" + j).innerHTML = "💨";
                }
            }
        }
        if (JSON.stringify(tablero) == JSON.stringify(solucion)) {
            document.getElementById("actividadEvaluableR").innerHTML += "<p>Has ganado</p>";
            victory = true;
        }
    }
}
