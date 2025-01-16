function popUp() {
    window.open("screen.html", "", "width=1280,height=720");
}
function maximize() {
    window.resizeTo(screen.availWidth, screen.availHeight);
    document.getElementById("but").setAttribute("value", "<Minimizar>");
    document.getElementById("but").setAttribute("onclick", "minimize();");
}
function minimize() {
    window.resizeTo(screen.availWidth / 2, screen.availHeight / 2);
    window.moveTo(screen.availWidth / 4, screen.availHeight / 4);
    document.getElementById("but").setAttribute("value", "<Maximizar>");
    document.getElementById("but").setAttribute("onclick", "maximize();");
}