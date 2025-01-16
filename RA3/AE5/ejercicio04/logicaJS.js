function redirectToRandomWebmail() {
    const randomValue = Math.floor(Math.random() * 3);
    let url;

    switch (randomValue) {
        case 0:
            url = "https://outlook.live.com/owa/"; // Hotmail login page
            break;
        case 1:
            url = "https://mail.google.com/"; // Gmail login page
            break;
        case 2:
            url = "https://www.serviciodecorreo.es/"; // serviciodecorreo.es login page
            break;
    }

    window.location.href = url;
}