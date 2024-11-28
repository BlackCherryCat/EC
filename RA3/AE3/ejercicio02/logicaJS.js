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
            let numero = Math.round(Math.random() * 3);
            if (numero == 0) {
                pleno = '0';
            } else if (numero == 1) {
                pleno = '1';
            } else if (numero == 2) {
                pleno = '2';
            } else {
                pleno = 'M';
            }

            // Agregar boleto con combinación y Pleno
            let boleto = `<p>Combinación ${i + 1}: ${combinacion.join(' ')}</p>`;
            boleto += `<p>Pleno al 15: ${pleno} </p>`;
            boletos.push(boleto);

            // Mostrar el boleto
            mostrarBoleto(combinacion, pleno, i + 1);
        }
    } else {
        document.getElementById('actividadEvaluableR').innerHTML = "Número introducido nno válido"
    }
}

function mostrarBoleto(combinacion, pleno, num) {
    let boletoHtml = `<p>Combinación ${num}: ${combinacion.join(' ')}</p>`;
    boletoHtml += `<p>Pleno al 15: ${pleno} goles</p>`;
    document.getElementById('actividadEvaluableR').innerHTML += boletoHtml;
}
