function verEnunciado() {
    const enunciado = `Realiza una aplicación web dónde se muestre un menú cuyas opciones sean las distintas operaciones a realizar sobre la cadena.<br/><br/>
    A continuación, se solicitará por pantalla, mediante una ventana emergente, al usuario una opción. La aplicación mostrará en la parte destinada para tal efecto, la salida de la operación efectuada sobre la str.<br/><br/>
    La cadena es: “Consiste en lanzar    aros” (nota que hay 4 espacios en blanco entre las últimas dos palabras).`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    const str = "Consiste en lanzar    aros";
    const opt = prompt(`
                Selecciona una operación:
                1. Número total de caracteres (incluyendo espacios).
                2. Carácter en la octava posición.
                3. Código Unicode del primer carácter.
                4. Concatenar con " ¿roto? … ¿o mejorado?".
                5. Comprobar si termina con "aro".
                6. Convertir el Unicode 65 a carácter.
                7. Comprobar si contiene "lanzar".
                8. Posición del primer "a".
                9. Posición del último "a".
                10. Comparar con "Consiste en lanzar aros".
                11. Coincidencias con "ar".
                12. Repetir la cadena 3 veces.
                13. Reemplazar "lanzar" por "coger".
                14. Buscar "ste" y su posición.
                15. Obtener los primeros 5 caracteres.
                16. Obtener un array de palabras.
                17. Comprobar si empieza con "Consiste en".
                18. Obtener 7 caracteres desde el segundo.
                19. Obtener caracteres desde el cuarto.
                20. Convertir a mayúsculas.
                21. Convertir a minúsculas.
                22. Dejar un único espacio entre palabras.
            `);

    let res = "";
    let index = 0;
    switch (opt) {
        case '1':
            res = "Número total de caracteres: " + str.length;
            break;
        case '2':
            res = "Carácter en la octava posición: " + str[7];
            break;
        case '3':
            res = "Código Unicode del primer carácter: " + str.charCodeAt(0);
            break;
        case '4':
            res = "Cadena concatenada: " + str + " ¿roto? … ¿o mejorado?" + "\n¿Se modificó la cadena original? No, " +
                "debido a que no estoy modificando la variable que contiene la cadena original.";
            break;
        case '5':
            res = "¿La cadena termina con \"aro\"? " + (str.endsWith("aro") ? "Sí" : "No");
            break;
        case '6':
            res = "El valor Unicode 65 corresponde al carácter: " + String.fromCharCode(65);
            break;
        case '7':
            res = "¿La cadena contiene \"lanzar\"? " + (str.includes("lanzar") ? "Sí" : "No");
            break;
        case '8':
            index = str.indexOf("a") + 1
            res = "Posición del primer \"a\": " + ind;
            break;
        case '9':
            index = str.lastIndexOf("a") + 1
            res = "Posición del último \"a\": " + index;
            break;
        case '10':
            res = str.localeCompare("Consiste en lanzar aros") + `. El hecho de que nos de -1 significa que iria antes que la 
        cadena original si fuese 1 seria despues de la cadena original y 0 es que son iguales`
            break;
        case '11':
            index = str.indexOf("ar");
            let cont = 0;
            while (index != -1) {
                // Si encontramos una coincidencia, aumentamos contador
                cont++;
                // Buscamos la siguiente coincidencia, comenzando justo después de la actual
                index = str.indexOf("ar", index + 1);
            }
            res = "Coincidencias con \"ar\": " + cont;
            break;
        case '12':
            res = "Cadena repetida 3 veces: " + str.repeat(3);
            break;
        case '13':
            res = "Cadena con \"lanzar\" reemplazado por \"coger\": " + str.replace("lanzar", "coger");
            break;
        case '14':
            res = "Posición de \"ste\": " + str.indexOf("ste");
            break;
        case '15':
            res = "Primeros 5 caracteres: " + str.slice(0, 5);
            break;
        case '16':
            res = "Palabras de la cadena: " + str.split(' ').join(', ');
            break;
        case '17':
            res = "¿La cadena empieza con \"Consiste en\"?" + (str.startsWith("Consiste en") ? "Sí" : "No");
            break;
        case '18':
            res = "7 caracteres desde el segundo: " + str.slice(1, 8);
            break;
        case '19':
            res = "Caracteres desde el cuarto: " + str.slice(3);
            break;
        case '20':
            res = "Cadena en mayúsculas: " + str.toUpperCase();
            break;
        case '21':
            res = "Cadena en minúsculas: " + str.toLowerCase();
            break;
        case '22':
            let strChan = "";
            let prevChar = "";
            for (let i = 0; i < str.length; i++) {
                const currentChar = str[i];
                if (currentChar != " " | prevChar != " ") {
                    strChan += currentChar;
                }
                prevChar = currentChar;
            }
            res = "Cadena con único espacio entre palabras: " + strChan;
            break;
        default:
            res = "Opción no válida, por favor elige una opción entre 1 y 22.";
            break;
    }

    document.getElementById("actividadEvaluableR").innerHTML = res;
}