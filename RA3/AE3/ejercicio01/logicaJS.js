function verEnunciado() {
    const enunciado = `La aplicación solicitará al usuario, mediante una ventana emergente, 
    un número del 1 al 8 correspondiente a una cantidad de combinaciones.<br/><br/>

    A continuación, se mostrará en la parte destinada para tal efecto, 
    un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.<br/><br/>

    Cada combinación consta de 6 números del 1 al 49.<br/>
    En una combinación, los números no se pueden repetir.<br/>
    Cada boleto tiene un número del 1 al 10, correspondiente al reintegro.<br/>`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    document.getElementById("actividadEvaluableR").innerHTML = '';
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 | num <= 8) {
        let boletos = [];
        for (let i = 0; i < num; i++) {
            let comb = [];
            for (let j = 0; j < 6; j++) {
                let numero = Math.floor(Math.random() * 49);
                while (comb.includes(numero)) {
                    numero = Math.floor(Math.random() * 49);
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
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido no válido"
    }
}
function mostrarBoleto(comb, num) {
    let boletoHtml = `<p>combinación ${num}: ${comb.join(' ')}</p>`;
    boletoHtml += `<p>Reintegro: ${Math.floor(Math.random() * 10) + 1}</p>`;
    document.getElementById("actividadEvaluableR").innerHTML += boletoHtml;
}