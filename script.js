
// KESHAN FUN GAME
// Main Game System

let currentLevel = 1;
let coins = 0;
let boardSize = 5;
let arrows = [];
let completed = false;

const board = document.getElementById("game-board");
const levelText = document.getElementById("level");
const coinText = document.getElementById("coins");
const title = document.getElementById("level-title");
const message = document.getElementById("message");
const nextButton = document.getElementById("next");

// Create level
function createLevel() {

    completed = false;

    board.innerHTML = "";

    nextButton.disabled = true;

    levelText.textContent = currentLevel;
    title.textContent = "LEVEL " + currentLevel;

    message.textContent = "Tap the arrows to solve!";

    boardSize = 5;

    board.style.gridTemplateColumns =
        `repeat(${boardSize}, 48px)`;

    arrows = [];

    const directions = ["⬆️", "⬇️", "⬅️", "➡️"];

    for (let i = 0; i < boardSize * boardSize; i++) {

        const button = document.createElement("button");

        button.className = "arrow-cell";

        button.textContent =
            directions[Math.floor(Math.random() * 4)];

        button.style.width = "48px";
        button.style.height = "48px";
        button.style.padding = "0";
        button.style.fontSize = "22px";
        button.style.background = "#1c3555";

        button.addEventListener("click", function() {

            if (completed) return;

            button.style.background = "#00a86b";
            button.textContent = "✓";
            button.disabled = true;

            checkComplete();

        });

        board.appendChild(button);

        arrows.push(button);
    }
}

// Check level completion
function checkComplete() {

    const remaining = arrows.filter(
        arrow => !arrow.disabled
    );

    if (remaining.length === 0) {

        completed = true;

        coins += 10;

        coinText.textContent = coins;

        message.textContent =
            "🎉 LEVEL COMPLETED! +10 COINS";

        nextButton.disabled = false;
    }
}

// Restart level
document.getElementById("restart")
.addEventListener("click", function() {

    createLevel();

});

// Next level
nextButton.addEventListener("click", function() {

    if (currentLevel >= 100) {

        message.textContent =
            "🏆 CONGRATULATIONS! ALL 100 LEVELS COMPLETED!";

        nextButton.disabled = true;

        return;
    }

    currentLevel++;

    createLevel();

});

// Reward button (Demo only)
document.getElementById("reward-btn")
.addEventListener("click", function() {

    message.textContent =
        "Reward Ads are not connected yet!";

});

// Start game
createLevel();
