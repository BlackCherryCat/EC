const maxLevel = 5;
let currentLevel = 1;
let levelDisplay = "";
let prevButton = "";
let nextButton = "";
function recover() {
    levelDisplay = document.getElementById('level');
    prevButton = document.getElementById('prevButton');
    nextButton = document.getElementById('nextButton');
    prevButton.disabled = currentLevel == 1 ? true : false;
}


function updateLevelDisplay() {
    levelDisplay.textContent = `Nivel ${currentLevel}`;
    history.replaceState({ level: currentLevel }, `Nivel ${currentLevel}`, `?nivel=${currentLevel}`);

    prevButton.disabled = currentLevel == 1 ? true : false;
    nextButton.disabled = currentLevel == maxLevel ? true : false;
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


window.addEventListener('popstate', (event) => {
    if (event.state && event.state.level) {
        currentLevel = event.state.level;
        updateLevelDisplay();
    }
});

// Initialize history state
history.replaceState({ level: currentLevel }, `Nivel ${currentLevel}`, `?nivel=${currentLevel}`);