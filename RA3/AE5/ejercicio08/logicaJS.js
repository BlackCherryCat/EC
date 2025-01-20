const maxLevel = 5;
let currentLevel = 1;

let levelDisplay = "";
let prevButton = "";
let nextButton = "";
let levelImage = "";
let playButton = "";

function recover() {
    levelDisplay = document.getElementById('level');
    prevButton = document.getElementById('prevButton');
    nextButton = document.getElementById('nextButton');
    levelImage = document.getElementById('level-image');
    playButton = document.getElementById('playButton');
    prevButton.disabled = currentLevel == 1 ? true : false;
}

const levelImages = [
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"
];

function updateLevelDisplay() {
    levelDisplay.textContent = `Nivel ${currentLevel}`;
    levelImage.src = levelImages[currentLevel - 1];
    levelImage.alt = `Nivel ${currentLevel}`;
    playButton.textContent = `Jugar al nivel ${currentLevel}`;
    history.replaceState({ level: currentLevel }, "", `?nivel=${currentLevel}`);

    prevButton.disabled = currentLevel == 1;
    nextButton.disabled = currentLevel == maxLevel;
}

function play() {
    const width = 500;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const playWindow = window.open(
        `Buscaminas.html?nivel=${currentLevel}`,
        'Buscaminas',
        `width=${width},height=${height},top=${top},left=${left}`
    );
}

function prev() {
    if (currentLevel > 1) {
        currentLevel--;
        updateLevelDisplay();
    }
}

function next() {
    if (currentLevel < maxLevel) {
        currentLevel++;
        updateLevelDisplay();
    }
}

history.replaceState({ level: currentLevel }, "", `?nivel=${currentLevel}`);