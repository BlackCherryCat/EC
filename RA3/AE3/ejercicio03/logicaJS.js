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
function primitiva() {
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 | num <= 8) {
        let boletos = [[]];
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
        document.getElementById('actividadEvaluableR').innerHTML = mostrarBoleto(boletos) + Reintegro();
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

    function Reintegro() {
        return `<p>Reintegro: <a class="reint">${Math.floor(Math.random() * 10) + 1}</a></p>`;
    }
}

function quiniela() {
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

    function mostrarBoleto(boletos) {
        let boletoHtml = '';
        for (let i = 0; i < boletos.length; i++) {
            for (let j = 0; j < boletos[i].length; j++) {
                boletoHtml += boletos[i][j]
            }
        }
        return boletoHtml;
    }
}


