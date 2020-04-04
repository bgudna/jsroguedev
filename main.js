canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');
ctx.fillRect(0,0,20,20,20);

x = y = 0;

document.querySelector('html').onkeypress = function(e) {
    if(e.key == 'w' || e.key == 'Up') y--;
    if(e.key == 's' || e.key == 'ArrowDown') y++;
    if(e.key == 'a' || e.key == 'ArrowLeft') x--;
    if(e.key == 'd' || e.key == 'j') x++;
};

function draw() {
    ctx.clearRect(0,0,1000,1000);
    ctx.fillRect (x*20,y*20, 20, 20);
}

setInterval(draw, 15);
