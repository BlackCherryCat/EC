function verEnunciado() {
    const enunciado = `Realiza una aplicación web dónde se muestren dos botones:

Encriptar mensaje
Desencriptar mensaje

Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, al usuario un mensaje y una clave numérica.

La aplicación empleará el alfabeto Unicode para codificar/decodificar el mensaje, dependiendo del botón clicado desplazando, cada carácter un número de veces igual al número que corresponda en la clave.

Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {

    document.getElementById("actividadEvaluableR").innerHTML = '<button onclick="encrypt();">Encriptar</button><button onclick="decrypt();">Desencriptar</button>'
}
function encrypt() {
    const mensaje = prompt("Introduce el mensaje a encriptar:");
    const clave = prompt("Introduce la clave numérica:");

    

    const mensajeEncriptado = procesarMensaje(mensaje, clave, true);
    document.getElementById("actividadEvaluableR").innerHTML = "Mensaje encriptado: " + mensajeEncriptado;
}

// Función para desencriptar el mensaje
function decrypt() {
    const mensaje = prompt("Introduce el mensaje a desencriptar:");
    const clave = prompt("Introduce la clave numérica:");

   

    const mensajeDesencriptado = procesarMensaje(mensaje, clave, false);
    document.getElementById("actividadEvaluableR").innerHTML = "Mensaje desencriptado: " + mensajeDesencriptado;
}

// Función para procesar el mensaje (encriptar/desencriptar)
function procesarMensaje(mensaje, clave, encriptar) {
    let resultado = '';
    let claveIndex = 0;


    // Iteramos sobre cada carácter del mensaje
    for (let i = 0; i < mensaje.length; i++) {
        let charCode = mensaje.charCodeAt(i);


        // Desplazamos el carácter según la clave
        let desplazamiento =parseInt(clave.charAt(claveIndex));
        console.log(claveIndex)

        if (encriptar) {
            charCode += desplazamiento;  // Para encriptar, aumentamos el código
        } else {
            charCode -= desplazamiento;  // Para desencriptar, disminuimos el código
        }

        resultado += String.fromCharCode(charCode);

        // Aumentamos el índice de la clave
        claveIndex++;
        if (mensaje[i] == " ") {
            claveIndex = 0;
        }
    }

    return resultado;
}