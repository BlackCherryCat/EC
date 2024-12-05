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
let boletos = [[]];
let reintegro = 0;
function primitiva() {
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 | num <= 8) {
        boletos = [[]];
        reintegro = 0;
        for (let i = 0; i < num; i++) {
            let numeros = []
            for (let j = 0; j < 6; j++) {
                let numero = Math.floor(Math.random() * 49);
                while (numeros.includes(numero)) {
                    numero = Math.floor(Math.random() * 49);
                }
                numeros.push(numero);
            }
            boletos.push(numeros);
        }
        reintegro = Math.floor(Math.random() * 10) + 1
        document.getElementById('actividadEvaluableR').innerHTML = mostrarBoleto(boletos) + `<p>Reintegro: <a class="reint">${reintegro}</a></p>` + `
        <div id="ganancia">
        <button onclick="ResultadoP();">Ver ganancia</button>
        <button onclick="ResultadoPM();">Ver ganancia manual</button>
        </div>
        `;
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido"
    }

    function mostrarBoleto(boletos) {
        let boletoHtml = ''
        for (let i = 0; i < boletos.length; i++) {
            boletoHtml += '<p>'
            for (let j = 0; j < boletos[i].length; j++) {
                boletoHtml += `<span>${boletos[i][j]}</span>`
            }
            boletoHtml += '</p>'
        }
        return boletoHtml;
    }

}

function ResultadoP() {
    let combG = [];
    let aciertos = 0;
    let reintG = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 6; i++) {
        combG.push(Math.floor(Math.random() * 49))
    }
    for (let i = 1; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            for (let k = 0; k < combG.length; k++) {
                if (boletos[i][j] == combG[k]) {
                    aciertos++
                }
            }
        }
    }
    if (reintegro == reintG) {
        document.getElementById('ganancia').innerHTML = `<p>${aciertos} aciertos + Reintegro <button onclick="primitiva();">Reintentar</button></p>`
    } else {
        document.getElementById('ganancia').innerHTML = `<p>${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`
    }

}

function ResultadoPM() {
    let intr = prompt('Introduce combinacion');
    let combG = intr.split(' ');
    let aciertos = 0;
    let reintG = prompt('Introduce reintegro');
    for (let i = 1; i < boletos.length; i++) {
        for (let j = 0; j < boletos[i].length; j++) {
            for (let k = 0; k < combG.length; k++) {
                if (boletos[i][j] == combG[k]) {
                    aciertos++
                }
            }
        }
    }
    if (reintegro == reintG) {
        document.getElementById('ganancia').innerHTML = `<p>${aciertos} aciertos + Reintegro <button onclick="primitiva();">Reintentar</button></p>`
    } else {
        document.getElementById('ganancia').innerHTML = `<p>${aciertos} aciertos <button onclick="primitiva();">Reintentar</button></p>`
    }

}

let pleno = [];
function quiniela() {
    let comb = parseInt(prompt("Ingrese el número de combinaciones"));
    if (comb > 0 | comb <= 8) {
        boletos = [[]];
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
        <div id="ganancia">
        <button onclick="ResultadoQ();">Ver ganancia</button>
        </div>
        `
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido"
    }

    function mostrarBoleto(comb) {
        let boletoHtml = '';
        let pleno = `
            <div class="pleno">
            <p><a id="00">0</a><a id="10">1</a><a id="20">2</a><a id="m0">M</a></p>
            <p><a id="01">0</a><a id="11">1</a><a id="21">2</a><a id="m1">M</a></p>
            </div>
        `;
        for (let i = 1; i < comb + 1; i++) {
            boletoHtml += `
            <div class="qui">
            `
            for (let j = 0; j < 14; j++) {
                boletoHtml += `<p><a id="${i}${j}0">1</a><a id="${i}${j}1">X</a><a id="${i}${j}2">2</a></p>`

            }
            boletoHtml += `
            </div>
            `
        }
        return boletoHtml + pleno;
    }
}

function ResultadoQ() {
    for (let i = 1; i < boletos.length; i++) {
        console.log(boletos[i])
        for (let j = 0; j < 14; j++) {
            if (boletos[i][j] == 0) {
                document.getElementById('' + i + j + 0).style.backgroundColor = "rgb(223, 113, 113)"
            }
            else if (boletos[i][j] == 1) {
                document.getElementById('' + i + j + 1).style.backgroundColor = "rgb(223, 113, 113)"
            }
            else {
                document.getElementById('' + i + j + 2).style.backgroundColor = "rgb(223, 113, 113)"
            }
        }

    }
    console.log(pleno)
    for (let i = 0; i < pleno.length; i++) {
        if (pleno[i] == 0) {
            document.getElementByIdç('0' + i).style.backgroundColor = "rgb(223, 113, 113)"
        }
        else if (pleno[i] == 1) {
            document.getElementById('1' + i).style.backgroundColor = "rgb(223, 113, 113)"
        }
        else if (pleno[i] == 2) {
            document.getElementById('2' + i).style.backgroundColor = "rgb(223, 113, 113)"
        }
        else {
            document.getElementById('m' + i).style.backgroundColor = "rgb(223, 113, 113)"
        }

    }
}


