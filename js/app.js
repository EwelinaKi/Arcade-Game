class Enemy {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    update(dt) {}

    // Draw the enemy on the screen, required method for game
    render(dt) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {

    constructor() {
        this.sprite = 'images/char-horn-girl.png';
        this.x = 204;
        this.y = 320;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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

let enemy1 = new Enemy(0, 60);
let enemy2 = new Enemy(0, 145);
let enemy3 = new Enemy(0, 230);

// Place all enemy objects in an array called allEnemies

let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player

let player = new Player()


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