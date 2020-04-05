tileSize = 64;
numTiles = 9;
uiWidth = 2;

canvas = document.querySelector('canvas');
wzrd = canvas.getContext('2d');
wzrd.fillRect(0,0,20,20,20);
wzrd.imageSmoothingEnabled = false;


canvas.width = tileSize*(numTiles*uiWidth);
canvas.height = tileSize*numTiles;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

x = y = 0;

spritez = new Image();
spritez.src = 'img/lolwhut.png';

document.querySelector('html').onkeypress = function(e) {
    if(e.key == 'w' || e.key == 'k') y--;
    if(e.key == 's' || e.key == 'j') y++;
    if(e.key == 'a' || e.key == 'h') x--;
    if(e.key == 'd' || e.key == 'l') x++;
};

document.querySelector('html').onkeydown = function(e) {
    if(e.key == 'ArrowUp') y--;
    if(e.key == 'ArrowDown') y++;
    if(e.key == 'ArrowLeft') x--;
    if(e.key == 'ArrowRight') x++;
};


function teikniteikni(sprite, x, y) {
    wzrd.drawImage(spritez, sprite*16, 0, 16, 16, x*tileSize, y*tileSize, tileSize, tileSize);
}

function draw() {
    wzrd.clearRect(0,0,canvas.width,canvas.height);
    teikniteikni(0, x, y);
}

setInterval(draw, 15);
