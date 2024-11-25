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

    document.getElementById("actividadEvaluableR").innerHTML = '<button onclick="encriptar();">Encriptar</button><button onclick="desencriptar();">Desencriptar</button>'
}

        // Función para encriptar el mensaje
        function encriptar() {
            const mensaje = prompt("Introduce el mensaje a encriptar:");
            const clave = prompt("Introduce la clave numérica (sin espacios):");
            
            if (isNaN(clave) || clave === "") {
                alert("La clave debe ser un número válido.");
                return;
            }
            
            const mensajeEncriptado = procesarMensaje(mensaje, clave, true);
            document.getElementById("actividadEvaluableR").innerHTML = "Mensaje encriptado: " + mensajeEncriptado;
        }

        // Función para desencriptar el mensaje
        function desencriptar() {
            const mensaje = prompt("Introduce el mensaje a desencriptar:");
            const clave = prompt("Introduce la clave numérica (sin espacios):");
            
            if (isNaN(clave) || clave === "") {
                alert("La clave debe ser un número válido.");
                return;
            }

            const mensajeDesencriptado = procesarMensaje(mensaje, clave, false);
            document.getElementById("actividadEvaluableR").innerHTML = "Mensaje desencriptado: " + mensajeDesencriptado;
        }

        // Función para procesar el mensaje (encriptar/desencriptar)
        function procesarMensaje(mensaje, clave, encriptar) {
            let resultado = '';
            let claveIndex = 0;  // Este será el índice para recorrer la clave.

            // Iteramos sobre cada carácter del mensaje
            for (let i = 0; i < mensaje.length; i++) {
                let charCode = mensaje.charCodeAt(i);

                
                // Obtenemos el desplazamiento de acuerdo con la clave
                let desplazamiento = parseInt(clave[claveIndex % clave.length]);  // Obtenemos el valor correspondiente de la clave

                // Encriptar o desencriptar según sea el caso
                if (encriptar) {
                    charCode += desplazamiento;  // Desplazamos el código para encriptar
                } else {
                    charCode -= desplazamiento;  // Desplazamos el código para desencriptar
                }

                // Añadimos el carácter resultante al resultado
                resultado += String.fromCharCode(charCode);
            
                
                    claveIndex++;

                    if (mensaje[i] == ' ') {
                        claveIndex = 0;  // Reiniciamos el contador de la clave
                        
                    }
    
            }

            return resultado;
        }