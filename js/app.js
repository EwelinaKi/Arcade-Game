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
        this.x = 208;
        this.y = 380;
        this.width = width;
        this.height = height;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        if (this.y < 70) {
            console.log("point")
        }
    }

    update() {}

    handleInput(key) {
        if (key === "left" && this.x >= 0) {
            this.x = this.x - 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "right" && this.x <= 400) {
            this.x = this.x + 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "up" && this.y >= 20) {
            this.y = this.y - 30;
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        if (key === "down" && this.y <= 410) {
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

let player = new Player(77,90)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});