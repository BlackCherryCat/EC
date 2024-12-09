function verEnunciado() {
    const enunciado = `La aplicación contendrá inicialmente dos botones <Jugar a La Primitiva> y 
    <Jugar a La Quiniela> que implementarán las funcionalidades descritas en los ejercicios 1 y 2, respectivamente.<br/><br/>

    Una vez mostrado en la parte destinada para tal efecto, el boleto correspondiente, aparecerá un botón tras este 
    <Comprobar boleto> cuya función será la de generar una combinación ganadora aleatoria y comprobar si 
    existe una combinación premiada en el boleto del usuario.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    document.getElementById("actividadEvaluableR").innerHTML = `
      <button onclick="primitiva();">Jugar La Primitiva</button>
      <button onclick="quiniela();">Jugar La Quiniela</button>
      `
}
let boletos = [];
let reintegro = 0;
function primitiva() {
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 && num <= 8) {
        boletos = [];
        reintegro = 0;
        for (let i = 0; i < num; i++) {
            let numeros = [];
            for (let j = 0; j < 6; j++) {
                let numero = Math.floor(Math.random() * 49);
                while (numeros.includes(numero)) {
                    numero = Math.floor(Math.random() * 49);
                }
                numeros.push(numero);
            }
            boletos.push(numeros);
        }
        reintegro = Math.floor(Math.random() * 10) + 1;
        document.getElementById('actividadEvaluableR').innerHTML = mostrarBoleto(boletos) + `<p>Reintegro: <a class="reint">${reintegro}</a></p>` + `
        <div id="ganancia">
        <button onclick="ResultadoP();">Ver ganancia</button>
        <button onclick="ResultadoPM();">Ver ganancia manual</button>
        </div>
        `;
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido";
    }

    function mostrarBoleto(boletos) {
        let boletoHtml = '';
        for (let i = 0; i < boletos.length; i++) {
            boletoHtml += '<p>';
            for (let j = 0; j < boletos[i].length; j++) {
                boletoHtml += `<span>${boletos[i][j]}</span>`;
            }
            boletoHtml += '</p>';
        }
        return boletoHtml;
    }

}

function ResultadoP() {
    let combG = [];
    let aciertos = 0;
    let bolaciert = 0;
    let reintG = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 6; i++) {
        combG.push(Math.floor(Math.random() * 49));
    }
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            if (boletos[i][j] == combG[j]) {
                bolaciert++;
            } else {
                break;
            }
        }
        if (aciertos < bolaciert) {
            aciertos = bolaciert;
        }
        bolaciert = 0;
    }
    switch (true) {
        case aciertos == 6 && reintegro == reintG:
            document.getElementById('ganancia').innerHTML = `<p>premio: 139.838.160. ${aciertos} aciertos + Reintegro <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 6:
            document.getElementById('ganancia').innerHTML = `<p>premio: 13.983.816. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 5:
            document.getElementById('ganancia').innerHTML = `<p>premio: 2.330.636. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 4:
            document.getElementById('ganancia').innerHTML = `<p>premio: 55.491. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 3:
            document.getElementById('ganancia').innerHTML = `<p>premio: 1.032. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case reintegro == reintG:
            document.getElementById('ganancia').innerHTML = `<p>premio: 57. Reintegro. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        default:
            document.getElementById('ganancia').innerHTML = `<p>No premiado. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
    }
}

function ResultadoPM() {
    let combG = [];
    for (let i = 0; i < 6; i++) {
        let num = parseInt(prompt(`Introduzca el numero ${i + 1} de tu boleto`));
        if (isNaN(num)) {
            combG[i] = 0;
        } else {
            combG[i] = num;
        }
    }
    let aciertos = 0;
    let bolaciert = 0;
    let reintG = parseInt(prompt('Introduce reintegro'));
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            if (boletos[i][j] == combG[j]) {
                bolaciert++;
            } else {
                break;
            }
        }
        if (aciertos < bolaciert) {
            aciertos = bolaciert;
        }
        bolaciert = 0;
    }
    switch (true) {
        case aciertos == 6 && reintegro == reintG:
            document.getElementById('ganancia').innerHTML = `<p>premio: 139.838.160. ${aciertos} aciertos + Reintegro <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 6:
            document.getElementById('ganancia').innerHTML = `<p>premio: 13.983.816. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 5:
            document.getElementById('ganancia').innerHTML = `<p>premio: 2.330.636. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 4:
            document.getElementById('ganancia').innerHTML = `<p>premio: 55.491. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case aciertos == 3:
            document.getElementById('ganancia').innerHTML = `<p>premio: 1.032. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        case reintegro == reintG:
            document.getElementById('ganancia').innerHTML = `<p>premio: 57. Reintegro. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
        default:
            document.getElementById('ganancia').innerHTML = `<p>No premiado. ${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`;
            break;
    }

}

let pleno = [];
let comb = 0;
function quiniela() {
    comb = parseInt(prompt("Ingrese el número de combinaciones"));
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
    document.getElementById('escribir').innerHTML = `
        <div id="ganancia">
        <button onclick="ResultadoQ();">Ver ganancia</button>
        <button onclick="ResultadoQM();">Ver ganancia manual</button>
        </div>
        `;
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

function ResultadoQ() {
    let boletosG = [];
    let aciertos = 0;
    let bolaciert = 0;
    for (let i = 0; i < comb; i++) {
        for (let j = 0; j < 14; j++) {
            boletosG[j] = Math.floor(Math.random() * 3);
        }
    }
    let plenoG = [];
    plenoG[0] = Math.round(Math.random() * 3);
    plenoG[1] = Math.round(Math.random() * 3);
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            if (boletos[i][j] == boletosG[j]) {
                bolaciert++;
            }
        }
        if (aciertos < bolaciert) {
            aciertos = bolaciert;
        }
        bolaciert = 0;
    }
    if (pleno[0] == plenoG[0] & pleno[1] == plenoG[1]) {
        aciertos++;
    }
    switch (aciertos) {
        case 15:
            document.getElementById('ganancia').innerHTML = `<p>premio: 76.527.504. ${aciertos} aciertos + Pleno al 15 <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 14:
            document.getElementById('ganancia').innerHTML = `<p>premio: 4.782.969. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 13:
            document.getElementById('ganancia').innerHTML = `<p>premio: 170.820. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 12:
            document.getElementById('ganancia').innerHTML = `<p>premio: 13.140. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 11:
            document.getElementById('ganancia').innerHTML = `<p>premio: 1.643. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 10:
            document.getElementById('ganancia').innerHTML = `<p>premio: 299. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        default:
            document.getElementById('ganancia').innerHTML = `<p>No premiado. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
    }
}
function ResultadoQM() {
    let boletosG = [];
    let aciertos = 0;
    let bolaciert = 0;
    for (let j = 0; j < 14; j++) {
        let char = prompt("Ingrese el resultado de los enfrentamientos");
        switch (char) {
            case "1":
                boletosG[j] = 0;
                break;
            case "x":
                boletosG[j] = 1;
                break;
            case "2":
                boletosG[j] = 2;
                break;
            default:
                boletosG[j] = 0;
                break;
        }
    }
    let plenoG = [];
    loc = prompt("Ingrese cantidad de goles del equipo local");
    con = prompt("Ingrese cantidad de goles del equipo contrario");
    switch (loc) {
        case "0":
            plenoG[0] = 0;
            break;
        case "1":
            plenoG[0] = 1;
            break;
        case "2":
            plenoG[0] = 2;
            break;
        case "m":
            plenoG[0] = 3;
            break;
        default:
            plenoG[0] = 0;
            break;
    }
    switch (con) {
        case "0":
            plenoG[1] = 0;
            break;
        case "1":
            plenoG[1] = 1;
            break;
        case "2":
            plenoG[1] = 2;
            break;
        case "m":
            plenoG[1] = 3;
            break;
        default:
            plenoG[1] = 0;
            break;
    }
    for (let i = 0; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            if (boletos[i][j] == boletosG[j]) {
                bolaciert++;
            }
        }
        if (aciertos < bolaciert) {
            aciertos = bolaciert;
        }
        bolaciert = 0;
    }
    if (pleno[0] == plenoG[0] & pleno[1] == plenoG[1]) {
        aciertos++;
    }
    switch (aciertos) {
        case 15:
            document.getElementById('ganancia').innerHTML = `<p>premio: 76.527.504. ${aciertos} aciertos + Pleno al 15 <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 14:
            document.getElementById('ganancia').innerHTML = `<p>premio: 4.782.969. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 13:
            document.getElementById('ganancia').innerHTML = `<p>premio: 170.820. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 12:
            document.getElementById('ganancia').innerHTML = `<p>premio: 13.140. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 11:
            document.getElementById('ganancia').innerHTML = `<p>premio: 1.643. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        case 10:
            document.getElementById('ganancia').innerHTML = `<p>premio: 299. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
        default:
            document.getElementById('ganancia').innerHTML = `<p>No premiado. ${aciertos} aciertos <button onclick="quiniela();">Reintentar</button></p>`;
            break;
    }
}