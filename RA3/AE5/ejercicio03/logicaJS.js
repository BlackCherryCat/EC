function popUp() {
    window.open("screen.html", "", "width=1280,height=720,menubar=no,toolbar=no,titlebar=no,scrollbar=no");
}
function OS() {

    let os = "Desconocido";

    if (navigator.userAgent.indexOf("Win") != -1) os = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) os = "Linux";

    document.getElementById("but").setAttribute("value", `Descargar para ${os}`);
}
window.onload = OS;