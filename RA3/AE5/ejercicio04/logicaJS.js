function redirectToRandomWebmail() {
    const randomValue = Math.floor(Math.random() * 3);
    let url;

    switch (randomValue) {
        case 0:
            url = "https://outlook.live.com/owa/";
            break;
        case 1:
            url = "https://mail.google.com/";
            break;
        case 2:
            url = "https://www.serviciodecorreo.es/";
            break;
    }

    window.location.href = url;
}