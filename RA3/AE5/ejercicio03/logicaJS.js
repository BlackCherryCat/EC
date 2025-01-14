function popUp() {
    window.open("screen.html", "", "width=500,menubar=no,toolbar=no,titlebar=no,scrollbar=no");
}
function OS() {

    let sisop = "Desconocido";

    if (navigator.userAgent.indexOf("Win") != -1) sisop = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) sisop = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) sisop = "Linux";

    document.getElementById("but").setAttribute("value", `Descargar para ${sisop}`)
}
function browser() {

    let bw = "Desconocido";

    if (navigator.userAgent.indexOf("Firefox") != -1) bw = "Firefox";
    if (navigator.userAgent.indexOf("Chrome") != -1) bw = "Chrome";
    if (navigator.userAgent.indexOf("Mac OS X") != -1) bw = "Safari";

    console.log(navigator.userAgent)
    let collection = document.getElementsByClassName("browser")
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = bw;

    }

}
function device() {
    let mobile = /Android|iPhone|iPad|iPod|Mobile/.test(navigator.userAgent)

    if (mobile) {
        document.getElementById('mobile').checked = true;
    } else {
        document.getElementById('desktop').checked = true;
    }

}
function version() {
    let version = "Desconocido";
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        let versionStart = navigator.userAgent.indexOf("Firefox/") + 8;
        version = navigator.userAgent.substring(versionStart);
    }
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        let versionStart = navigator.userAgent.indexOf("Chrome/") + 7;
        version = navigator.userAgent.substring(versionStart, navigator.userAgent.indexOf(" ", versionStart));
    }
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        let versionStart = navigator.userAgent.indexOf("Safari/") + 8;
        version = navigator.userAgent.substring(versionStart, navigator.userAgent.indexOf(" ", versionStart));
    }
    document.getElementById("version").innerHTML = version
}
function geo() {
    navigator.geolocation.getCurrentPosition(
        function (location) {
            document.getElementById("lat").innerHTML = location.coords.latitude;
            document.getElementById("lon").innerHTML = location.coords.longitude;
        });
}
