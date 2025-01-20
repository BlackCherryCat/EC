const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('nivel');
function recover() {
    document.getElementById('level-display').textContent = `Nivel ${level}`;
}
