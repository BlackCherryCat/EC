function verEnunciado() {
    const enunciado = `Implementa una página web que contenga un botón <Nueva ventana>.
Al clicar sobre este, se generará una nueva ventana (pop-up) con una resolución 720p y 
debe mostrar el menú y su barra de herramientas. (Haz uso de las propiedades y métodos del objeto window)
`;
    document.getElementById("actividadEvaluable").innerHTML = enunciado
}
function verResolucion() {
    document.getElementById("actividadEvaluableR").innerHTML = `
      <input
      type="button"
      value="<Nueva ventana>"
      onclick="popUp();" />
      `;
}
function popUp() {
    window.open("", "", "width=1280,height=720,menubar=no,toolbar=no,titlebar=no");
}