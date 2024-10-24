function verEnunciado() {
    let enunciado = "Implementa el juego del buscaminas en JS.<br/>" +
        "Para ello, se definirá un tablero, un array en 2d o matriz, con 📦 y 💣 (busca el carácter especial html para imprimir ese icono).<br/>" +
        "A continuación el usuario, introducirá una coordenada.Por ejemplo: 0,0.<br/>" +
        "El programa mostrará si dicha coordenada está vacía 📦 o contiene una mina 💣, mostrando el tablero cambiado para dicha acción.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}

let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let loose = false;
let victory = false;

function verResolucion() {
    tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    document.getElementById("actividadEvaluableR").innerHTML =
        "<p><a id=\"00\">📦</a><a id=\"01\">📦</a><a id=\"02\">📦</a></p>" +
        "<p><a id=\"10\">📦</a><a id=\"11\">📦</a><a id=\"12\">📦</a></p>" +
        "<p><a id=\"20\">📦</a><a id=\"21\">📦</a><a id=\"22\">📦</a></p>" +
        "<input " +
        "type=\"button\"" +
        "name=\"botonJugar\"" +
        "value=\"Insertar coordenada\"" +
        "onclick=\"jugar();\" />";
}

function jugar() {
    const solucion = [[1, 0, 0], [1, 0, 0], [0, 1, 0]];
    let x, y;

    if (loose | victory) {
        verResolucion();
        x = prompt("Introduzca cordenada x");
        y = prompt("Introduzca cordenada y");
        loose = false
        victory = false
    } else {
        x = prompt("Introduzca cordenada x");
        y = prompt("Introduzca cordenada y");
    }

    if (solucion[x][y] == 0) {
        document.getElementById(x + y).innerHTML = "💥";
        document.getElementById("actividadEvaluableR").innerHTML += "<p>Perdiste</p> <p>Introduce una coordenada " +
            "o pulse Ver resolución para reintentar</p>";
        loose = true
    } else {
        document.getElementById(x + y).innerHTML = "💨";
        tablero[x][y] = 1;
    }

    let cont = 0;

    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == solucion[i][j]) {
                cont++;
            }
        }
    }

    if (cont == 9) {
        for (let i = 0; i < solucion.length; i++) {
            for (let j = 0; j < solucion[i].length; j++) {
                if (solucion[i][j] == 0) {
                    document.getElementById(i + "" + j).innerHTML = "💣";
                }
            }
        }
        document.getElementById("actividadEvaluableR").innerHTML += "<p>Has ganado</p>";
        victory = true
    }
}
