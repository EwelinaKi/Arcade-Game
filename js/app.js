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
        // if (this.y < 70) {
        // dodac obsluge punktow
        // }
    }

    update() {}

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

// Now instantiate your objects.

let enemy1 = new Enemy(-50, 140, 80);
let enemy2 = new Enemy(-50, 223, 80);
let enemy3 = new Enemy(-50, 306, 80);

// Place all enemy objects in an array called allEnemies

let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player

let player = new Player(77, 90)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const costume1 = document.getElementById("costume1");
const costume2 = document.getElementById("costume2");
const costume3 = document.getElementById("costume3");
const costume4 = document.getElementById("costume4");
const costume5 = document.getElementById("costume5");

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

function changeCostume(costume, width, height) {
    player.sprite = costume;
    player.width = width;
    player.height = height;
}