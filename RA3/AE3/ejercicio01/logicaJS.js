function verEnunciado() {
    let enunciado = "";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 | num <= 8) {
        let boletos = [];
        for (let i = 0; i < num; i++) {
            let comb = [];
            for (let j = 0; j < 6; j++) {
                let numero = Math.floor(Math.random() * 49) + 1;
                while (comb.includes(numero)) {
                    numero = Math.floor(Math.random() * 49) + 1;
                }
                comb.push(numero);
            }

            // Agregar boleto con reintegro
            let boleto = `<p>combinación ${i + 1}: ${comb.join(' ')}</p>`;
            boleto += `<p>Reintegro: ${Math.floor(Math.random() * 10) + 1}</p>`;
            boletos.push(boleto);

            // Mostrar el boleto
            mostrarBoleto(comb, i + 1);
        }
    }
}
function mostrarBoleto(comb, num) {
    let boletoHtml = `<p>combinación ${num}: ${comb.join(' ')}</p>`;
    boletoHtml += `<p>Reintegro: ${Math.floor(Math.random() * 10) + 1}</p>`;
    document.getElementById("actividadEvaluableR").innerHTML = boletoHtml;
}