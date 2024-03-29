function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "yellow", 10, 120)
    redGamePiece = new component(30, 30, "red", 10, 10);
    blueGamePiece = new component(30, 30, "blue", 10, 180);
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480; 
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    
        window.addEventListener('keydown', function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function(e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
        clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }
}


function component(width, height, color, x, y) {
    this.width = width; 
    this.height = height; 
    this.speedX = 0;
    this.speedY = 0;
    this.x = x; 
    this.y = y; 
    this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color; 
    ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}


function updateGameArea() {
myGameArea.clear();
myGamePiece.newPos();
myGamePiece.speedX = 0;
myGamePiece.speedY = 0;  
if (myGameArea.keys && myGameArea.keys == 37) {myGamePiece.speedX = -1; }
if (myGameArea.keys && myGameArea.keys == 39) {myGamePiece.speedX = 1; }
if (myGameArea.keys && myGameArea.keys == 38) {myGamePiece.speedY = -1; }
if (myGameArea.keys && myGameArea.keys == 40) {myGamePiece.speedY = 1; }
myGamePiece.update();
}


function moveUp() {myGamePiece.speedY -= 1;} 
function moveDown() {myGamePiece.speedY += 1;}
function moveLeft() {myGamePiece.speedX -= 1;}
function moveRight() { myGamePiece.speedX += 1;}

function stopMove() {myGamePiece.speedX = 0; myGamePiece.speedY = 0;}