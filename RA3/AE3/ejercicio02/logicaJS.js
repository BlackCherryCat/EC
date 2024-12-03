function verEnunciado() {
    const enunciado = `La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 
    correspondiente a una cantidad de combinaciones.<br/><br/>

    A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, 
    introducido por el usuario, generadas de forma aleatoria.<br/><br/>

    Cada combinación consta de 14 enfrentamientos entre dos equipos, donde hay tres opciones 1 X 2 
    (1 gana el equipo local, X empate y 2 gana el equipo visitante)<br/><br/>

    Cada boleto tiene una combinación extra donde se elige 0 1 2 M 
    (representa el número de goles marcados por ese equipo, M 3 o más goles), correspondiente al Pleno al 15.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let comb = parseInt(prompt("Ingrese el número de combinaciones"));
    if (comb > 0 | comb <= 8) {
        let boletos = [[]];
        for (let i = 0; i < comb; i++) {
            // Generar combinación de enfrentamientos
            let combinacion = [];
            for (let j = 0; j < 14; j++) {
                let resultado = Math.floor(Math.random() * 3);
                if (resultado == 0) {
                    resultado = '<p><a class="win">1</a><a>X</a><a>2</a></p>';
                } else if (resultado == 1) {
                    resultado = '<p><a>1</a><a class="win">X</a><a>2</a></p>';
                } else {
                    resultado = '<p><a>1</a><a>X</a><a class="win">2</a></p>';
                }
                combinacion.push(resultado);
            }

            // Agregar boleto con Pleno al 15
            let pleno = '';
            let numero = Math.round(Math.random() * 3);
            if (numero == 0) {
                pleno = '<br/><p><a class="win">0</a><a>1</a><a>2</a><a>M</a></p><br/>';
            } else if (numero == 1) {
                pleno = '<br/><p><a>0</a><a class="win">1</a><a>2</a><a>M</a></p><br/>';
            } else if (numero == 2) {
                pleno = '<br/><p><a>0</a><a>1</a><a class="win">2</a><a>M</a></p><br/>';
            } else {
                pleno = '<br/><p><a>0</a><a>1</a><a>2</a><a class="win">M</a></p><br/>';
            }
            boletos.push(combinacion);
            boletos.push(pleno)
        }
        // Mostrar el boleto
        document.getElementById('actividadEvaluableR').innerHTML = mostrarBoleto(boletos)
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido"
    }
}

function mostrarBoleto(boletos) {
    let boletoHtml = '';
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            boletoHtml += boletos[i][j]
        }
    }
    return boletoHtml;
}
