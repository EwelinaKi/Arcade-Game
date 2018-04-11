Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

class Enemy {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 99;
        this.height = 77;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    update(dt) {
        this.x = this.x + this.speed * dt;
    }

    // Draw the enemy on the screen, required method for game
    render(dt) {
        if (this.x > 505) {
            this.x = -50;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        } else {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }
}

class Player {

    constructor(width, height) {
        this.sprite = 'images/char-horn-girl.png';
        this.x = 210;
        this.y = 380;
        this.width = width;
        this.height = height;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
    }

    handleInput(key) {
        if (key === "left" && this.x > 29) {
            this.x = this.x - 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "right" && this.x <= 400) {
            this.x = this.x + 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "up" && this.y > 50) {
            this.y = this.y - 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "down" && this.y <= 490) {
            this.y = this.y + 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }
}

class Gem {
    constructor(img, possiblePositions) {
        this.sprite = img;
        this.x = possiblePositions.sample()[0];
        this.y = possiblePositions.sample()[1];
        this.width = 101;
        this.height = 112;

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 60, 70);
    }

    update() {
    }

}


function changeCostume(costume, width, height) {
    player.sprite = costume;
    player.width = width;
    player.height = height;
}

function game_over(points = "", level = "") {
    modal.style.display = "block";
    summaryText = `<p>Level: ${level}</p>
    <p>Score: ${score}</p>`
    document.getElementById("text").innerHTML = (summaryText)
}

// Now instantiate your objects.


const gemOrangePositions = [[23, 55], [123, 55], [223, 55], [323, 55], [423, 55]];
const gemGreenPositions = [[23, 140], [123, 140], [223, 140], [323, 140], [423, 140], [23, 225], [123, 225], [223, 225], [323, 225], [423, 225], [23, 310], [123, 310], [223, 310], [323, 310], [423, 310]];
const gemBluePositions = [[23, 480], [123, 480], [323, 480], [423, 480]];
const lastLevel = 6;
const costume1 = document.getElementById("costume1");
const costume2 = document.getElementById("costume2");
const costume3 = document.getElementById("costume3");
const costume4 = document.getElementById("costume4");
const costume5 = document.getElementById("costume5");
const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName("close")[0];
const restartButton = document.getElementById("restartButton");

let enemy1 = new Enemy(-50, 140, 80);
let enemy2 = new Enemy(-150, 223, 80);
let enemy3 = new Enemy(-250, 306, 80);

let allEnemies = [enemy1, enemy2, enemy3];
let player = new Player(77, 90);
let orangeGem = new Gem('images/Gem Orange.png', gemOrangePositions);
let greenGem = new Gem('images/Gem Green.png', gemGreenPositions);
let blueGem = new Gem('images/Gem Blue.png', gemBluePositions);

let levelChangeDetection = false;
let isOrangeGemCollected = false;
let isGreenGemCollected = false;
let isBlueGemCollected = false;
let score = 0;
let level = 1;
let hearts = 5;

costume1.onclick = function () {
    changeCostume("images/char-boy.png", 67, 88);
};
costume2.onclick = function () {
    changeCostume("images/char-cat-girl.png", 68, 90);
};
costume3.onclick = function () {
    changeCostume("images/char-horn-girl.png", 77, 90);
};
costume4.onclick = function () {
    changeCostume("images/char-princess-girl.png", 76, 89);
};
costume5.onclick = function () {
    changeCostume("images/char-pink-girl.png", 75, 99);
};

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

restartButton.onclick = function () {
    location = location
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}