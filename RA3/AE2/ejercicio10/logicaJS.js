function verEnunciado() {
    const enunciado = `Realiza una aplicación web dónde se muestren dos botones: <br/><br/>
    Encriptar mensaje <br/>
    Desencriptar mensaje <br/><br/>
    Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, 
    al usuario un mensaje y una clave numérica. <br/>
    La aplicación empleará el alfabeto Unicode para codificar/decodificar el mensaje, 
    dependiendo del botón clicado desplazando, cada carácter un número de veces igual al número que corresponda en la clave. <br/>
    Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {

    document.getElementById("actividadEvaluableR").innerHTML = '<button onclick="encrypt();">Encriptar</button><button onclick="decrypt();">Desencriptar</button>'
}
function encrypt() {
    const mensaje = prompt("Introduce el mensaje a encriptar:");
    const clave = prompt("Introduce la clave numérica:");
    document.getElementById("actividadEvaluableR").innerHTML = "Mensaje encriptado: " + procesarMensaje(mensaje, clave, true);
}

// Función para desencriptar el mensaje
function decrypt() {
    const mensaje = prompt("Introduce el mensaje a desencriptar:");
    const clave = prompt("Introduce la clave numérica:");
    document.getElementById("actividadEvaluableR").innerHTML = "Mensaje desencriptado: " + procesarMensaje(mensaje, clave, false);
}

// Función para procesar el mensaje (encriptar/desencriptar)
function procesarMensaje(mensaje, clave, encriptar) {
    let resultado = "";
    let claveIndex = 0;
    // Iteramos sobre cada carácter del mensaje
    for (let i = 0; i < mensaje.length; i++) {
        let charCode = mensaje.charCodeAt(i);
        // Desplazamos el carácter según la clave
        let desplazamiento = parseInt(clave.charAt(claveIndex));

        if (encriptar) {
            charCode += desplazamiento;  // Para encriptar, aumentamos el código
        } else {
            charCode -= desplazamiento;  // Para desencriptar, disminuimos el código
        }

        resultado += String.fromCharCode(charCode);
        
        // Reseteamos el índice de la clave si cumple las condiciones, si no, se autoincrementa
        if (mensaje[i] == " " | String.fromCharCode(mensaje.charCodeAt(i) - parseInt(clave.charAt(claveIndex))) == " " | claveIndex == clave.length - 1) {
            claveIndex = 0;
        } else {
            claveIndex++;
        }
    }

    return resultado;
}