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
    let num = parseInt(prompt("Ingrese el número de combinaciones"));
    if (num > 0 && num <= 8) {
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
}
function mostrarBoleto(boletos) {
    let boletoHtml = ''
    for (let i = 0; i < boletos.length; i++) {
        boletoHtml += '<p>'
        for (let j = 0; j < boletos[i].length; j++) {
            boletoHtml += `<a>${boletos[i][j]}</a>`
        }
        boletoHtml += '</p>'
    }
    return boletoHtml;
}
function Reintegro() {
    return `<p>Reintegro: <a class="reint">${Math.floor(Math.random() * 10) + 1}</a></p>`;
}