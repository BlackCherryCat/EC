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

//Esta funcion inicializa el tablero y el juego para poder empezar a jugar
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
//Esta funcion desarrolla lo que hará el botón de Insertar coordenada
function jugar() {
    const solucion = [[1, 0, 0], [1, 0, 0], [0, 1, 0]];
    let x, y;
    //Esta condicion comprueba si alguno de los booleanos de victoria o derrota esta en true para asi reiniciar el tablero,
    //si no simplemente pide las coordenadas sin cambiar nada más
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
    //En esta condicion se comprueba si las coordenadas introducidas por el usuario coinciden con un 0 dentro del contenido de
    //dicha posicion del array, si es así sale el emoji de explosión y perderas y, en la proxima interacción con el boton de coordenadas,
    //el tablero se reseteara debido al booleano de derrota que pasará a ser true, si no, simplemente pondra 1 a la posicion del array
    //que coincida con las coordenadas y le pondra un emoji indicandole que dentro no había nada
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
    //Este bucle comprueba cuantas coincidencias hay entre el array de solucion, que es la solucion predefinida del juego, y
    //el array tablero, que es el array que se va modificando segun el usuario introduzca coordenadas.
    //Como cada vez que el usuario inserta una coordenada, esta dentro del array tablero pasa a ser 1, cuando todos los unos
    //de tablero coincidan con los unos de solucion entonces la variable cont pasará a valer 9
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == solucion[i][j]) {
                cont++;
            }
        }
    }
    //Al valer 9 la variable cont significará que el usuario ha abierto todas las cajas que podia abrir y lo unico que queda son bombas,
    //entonces el tablero pasará a mostrar todas las bombas que estaban en el tablero y a darte la enhorabuena
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
