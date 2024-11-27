function verEnunciado() {
    let enunciado = "";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let comb = parseInt(prompt("Ingrese el número de combinaciones"));
    if (comb > 0 | comb <= 8) {
        let boletos = [];
        for (let i = 0; i < comb; i++) {
            // Generar combinación de enfrentamientos
            let combinacion = [];
            for (let j = 0; j < 14; j++) {
                let resultado = Math.floor(Math.random() * 3);
                if (resultado == 0) {
                    resultado = '1';
                } else if (resultado == 1) {
                    resultado = 'X';
                } else {
                    resultado = '2';
                }
                combinacion.push(resultado);
            }

            // Agregar boleto con Pleno al 15
            let pleno = '';
            while (pleno.length < 3) {
                let numero = Math.floor(Math.random() * 3);
                if (numero == 0) {
                    pleno += '1';
                } else if (numero == 1) {
                    pleno += 'X';
                } else {
                    pleno += '2';
                }
            }

            // Agregar boleto con combinación y Pleno
            let boleto = `<p>Combinación ${i + 1}: ${combinacion.join(' ')}</p>`;
            boleto += `<p>Pleno al 15: ${pleno} goles</p>`;
            boletos.push(boleto);

            // Mostrar el boleto
            mostrarBoleto(combinacion, pleno, i + 1);
        }
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido inválido"
    }
}

function mostrarBoleto(combinacion, pleno, num) {
    let boletoHtml = `<p>Combinación ${num}: ${combinacion.join(' ')}</p>`;
    boletoHtml += `<p>Pleno al 15: ${pleno} goles</p>`;
    document.getElementById('actividadEvaluableR').innerHTML = boletoHtml;
}
