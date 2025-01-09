function popUp() {
    window.open("screen.html", "", "width=1280,height=720,menubar=no,toolbar=no,titlebar=no,scrollbar=no");
}
function maximize() {
    window.moveTo(0, 0);
    window.resizeTo(screen.availWidth, screen.availHeight);
    document.getElementById("but").setAttribute("value","<Minimizar>");
    document.getElementById("but").setAttribute("onclick","minimize();");
}
function minimize() {
    document.getElementById("but").setAttribute("value","<Maximizar>");
    document.getElementById("but").setAttribute("onclick","maximize();");
}