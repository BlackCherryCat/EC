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
let boletos = [];
let pleno = [];
function verResolucion() {
    let comb = parseInt(prompt("Ingrese el número de combinaciones"));
    if (comb > 0 && comb <= 8) {
        boletos = [];
        for (let i = 0; i < comb; i++) {
            // Generar combinación de enfrentamientos
            let combinacion = [];
            for (let j = 0; j < 14; j++) {
                combinacion[j] = Math.floor(Math.random() * 3);
            }
            boletos.push(combinacion);
        }
        pleno = [];
        pleno[0] = Math.round(Math.random() * 3);
        pleno[1] = Math.round(Math.random() * 3);
        // Mostrar el boleto
        document.getElementById('actividadEvaluableR').innerHTML = mostrarBoleto(comb) + `
        <div id="escribir">
        <button onclick="EscribirQ();">Escribir Quiniela</button>
        </div>
        `;
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido";
    }

    function mostrarBoleto(comb) {
        let boletoHtml = '';
        let pleno = `
            <div class="pleno">
            <p><a id="00">0</a><a id="10">1</a><a id="20">2</a><a id="m0">M</a></p>
            <p><a id="01">0</a><a id="11">1</a><a id="21">2</a><a id="m1">M</a></p>
            </div>
        `;
        for (let i = 0; i < comb; i++) {
            boletoHtml += `
            <div class="qui">
            `;
            for (let j = 0; j < 14; j++) {
                boletoHtml += `<p><a id="0${i}${j}">1</a><a id="1${i}${j}">X</a><a id="2${i}${j}">2</a></p>`

            }
            boletoHtml += `
            </div>
            `;
        }
        return boletoHtml + pleno;
    }
}

function EscribirQ() {
    document.getElementById('escribir').innerHTML = ``;
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < 14; j++) {
            if (boletos[i][j] == 0) {
                document.getElementById('0' + i + j).style.backgroundColor = "rgb(223, 113, 113)";
            }
            else if (boletos[i][j] == 1) {
                document.getElementById('1' + i + j).style.backgroundColor = "rgb(223, 113, 113)";
            }
            else {
                document.getElementById('2' + i + j).style.backgroundColor = "rgb(223, 113, 113)";
            }
        }

    }
    for (let i = 0; i < pleno.length; i++) {
        if (pleno[i] == 0) {
            document.getElementById('0' + i).style.backgroundColor = "rgb(223, 113, 113)";
        }
        else if (pleno[i] == 1) {
            document.getElementById('1' + i).style.backgroundColor = "rgb(223, 113, 113)";
        }
        else if (pleno[i] == 2) {
            document.getElementById('2' + i).style.backgroundColor = "rgb(223, 113, 113)";
        }
        else {
            document.getElementById('m' + i).style.backgroundColor = "rgb(223, 113, 113)";
        }
    }
}