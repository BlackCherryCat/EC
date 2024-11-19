function verEnunciado() {
    let enunciado = "";
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    let frase = prompt("Escriba una frase");
    let digi = 0
    let spac = 0
    let charcon = 0
    const regdigi = /^[\d]/;
    const regchar = /^[a-zA-Z]/;
    const regspac = /^[ ]/;

    for (let i = 0; i < frase.length; i++) {
        let char = frase.charAt(i);
        if (regdigi.test(char)) {
            digi++
        } else if (regchar.test(char)) {
            charcon++
        } else if (regspac.test(char)) (
            spac++
        )
    }
    document.getElementById("actividadEvaluableR").innerHTML = digi + " dígitos, " + spac + " espacios y " + charcon + " letras";
}