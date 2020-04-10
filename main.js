tileSize = 32;
numTiles = 12;
uiWidth = 1;

x = y = 0;

var leikmadur = new Leikmadur(randomPassableTile());

var goingUp, goingDown, goingLeft, goingRight;

canvas = document.querySelector('canvas');
wzrd = canvas.getContext('2d');
wzrd.fillRect(0,0,20,20,20);

canvas.width = tileSize*(numTiles*uiWidth);
canvas.height = tileSize*numTiles;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

spritez = new Image();
spritez.src = 'img/lolwhut.png';

document.querySelector('html').onkeypress = function(e) {
    if(e.key == 'w' || e.key == 'k') {
        leikmadur.tryMove(0, -1);
        goingUp = true;
    } 
    if(e.key == 's' || e.key == 'j') leikmadur.tryMove(0, 1);
    if(e.key == 'a' || e.key == 'h') leikmadur.tryMove(-1, 0);
    if(e.key == 'd' || e.key == 'l') leikmadur.tryMove(1, 0);
};

document.querySelector('html').onkeydown = function(e) {
    if(e.key == 'ArrowUp') leikmadur.tryMove(0, -1);
    if(e.key == 'ArrowDown') leikmadur.tryMove(0, 1);
    if(e.key == 'ArrowLeft') leikmadur.tryMove(-1, 0);
    if(e.key == 'ArrowRight') leikmadur.tryMove(0, 0);
};


function teikniteikni(sprite, x, y) {
    wzrd.drawImage(spritez, sprite*16, 0, 16, 16, x*tileSize, y*tileSize, tileSize, tileSize);
}

function draw() {
    wzrd.imageSmoothingEnabled = false;
    wzrd.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<numTiles;i++) {
        for(let j=0;j<numTiles;j++) {
            getTile(i,j).draw();
        }
    }

    leikmadur.draw();
}

setInterval(draw, 15);
generateLevel();