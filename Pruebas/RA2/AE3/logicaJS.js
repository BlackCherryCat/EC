function verEnunciado() {
    let enunciado = "Implementa el juego del buscaminas en JS.";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}

let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let solucion = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let loose = false;
let victory = false;
//Esta funcion inicializa el tablero y el juego para poder empezar a jugar, en este caso el array de solución es generado de
//manera aleatoria, por tanto en cada partida las posiciones y cantidades de bombas cambiará
function verResolucion() {
    tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    document.getElementById("actividadEvaluableR").innerHTML =
        "<p><a class=\"box\" id=\"00\" onclick=\"jugar(0,0);\">📦</a><a class=\"box\" id=\"01\" onclick=\"jugar(0,1);\">📦</a><a class=\"box\" id=\"02\" onclick=\"jugar(0,2);\">📦</a></p>" +
        "<p><a class=\"box\" id=\"10\" onclick=\"jugar(1,0);\">📦</a><a class=\"box\" id=\"11\" onclick=\"jugar(1,1);\">📦</a><a class=\"box\" id=\"12\" onclick=\"jugar(1,2);\">📦</a></p>" +
        "<p><a class=\"box\" id=\"20\" onclick=\"jugar(2,0);\">📦</a><a class=\"box\" id=\"21\" onclick=\"jugar(2,1);\">📦</a><a class=\"box\" id=\"22\" onclick=\"jugar(2,2);\">📦</a></p>";
    for (let i = 0; i < solucion.length; i++) {
        for (let j = 0; j < solucion[i].length; j++) {
            solucion[i][j] = Math.round(Math.random());
        }
    }
    console.log(solucion);
}
//Esta funcion desarrolla lo que hará cada vez que pulsemos una caja
function jugar(x, y) {
    //Esta condicion comprueba si alguno de los booleanos de victoria o derrota esta en true para asi reiniciar el tablero
    if (loose | victory) {
        verResolucion();
        loose = false;
        victory = false;
    }
    //En esta condicion se comprueba si la coordenada de la caja pulsada por el usuario coincide con un 0 dentro del contenido de
    //dicha posición del array, si es así perderas y, en la proxima interacción con alguna caja,
    //el tablero se reseteara debido al booleano de derrota que pasará a ser true, si no, simplemente pondra 1 a la posición del array
    //que coincida con las coordenadas de esa caja y le pondra un emoji indicandole que dentro no había nada
    if (solucion[x][y] == 0) {
        document.getElementById("actividadEvaluableR").innerHTML += "<p>Perdiste</p> <p>Pulsa cualquier casilla o Ver resolución para reintentar</p>";
        loose = true;
    } else {
        document.getElementById(x + "" + y).innerHTML = "💨";
        tablero[x][y] = 1;
    }
    //Esta condicion evalúa si el contenido de los arrays de tablero y solucion, pasado a JSON
    //para poder comparar el contenido de los arrays, son iguales,
    //entonces el tablero pasará a mostrar todas las bombas que estaban en el tablero y a darte la enhorabuena
    if (JSON.stringify(tablero) == JSON.stringify(solucion)) {
        for (let i = 0; i < solucion.length; i++) {
            for (let j = 0; j < solucion[i].length; j++) {
                if (solucion[i][j] == 0) {
                    document.getElementById(i + "" + j).innerHTML = "💣";
                }
            }
        }
        document.getElementById("actividadEvaluableR").innerHTML += "<p>Has ganado</p>";
        victory = true;
    }
    //Esta condicion dice lo que pasará cuando el jugador pierda, el cual descubrirá todas las cajas del tablero y en la casilla que
    //ha pulsado, que está la bomba, una explosión
    if (loose) {
        for (let i = 0; i < solucion.length; i++) {
            for (let j = 0; j < solucion[i].length; j++) {
                if (solucion[i][j] == 0) {
                    document.getElementById(i + "" + j).innerHTML = "💣";
                } else {
                    document.getElementById(i + "" + j).innerHTML = "💨";
                }
            }
        }
        document.getElementById(x + "" + y).innerHTML = "💥";
    }
}
