// settings and setups

tileSize = 32;
numTiles = 16;
uiWidth = 8;
level = 1;
maxHp = 6;

spritesheet = new Image();
spritesheet.src = 'img/dev-sprites.png';
spritesheet.onload = showTitle;
                         
gameState = "loading";  

startingHp = 3; 
numLevels = 6;      

shakeAmount = 0;       
shakeX = 0;                 
shakeY = 0;      

document.querySelector("html").onkeypress = function(e){
    if(gameState == "title"){                              
        startGame();                
    }else if(gameState == "dead"){                             
        showTitle();                                        
    }else if(gameState == "running"){            
        if(e.key=="w" || e.key=="k") player.tryMove(0, -1);
        if(e.key=="s" || e.key=="j") player.tryMove(0, 1);
        if(e.key=="a" || e.key=="h") player.tryMove(-1, 0);
        if(e.key=="d" || e.key=="l") player.tryMove(1, 0);

        if(e.key>=1 && e.key<=9) player.castSpell(e.key-1);
        if(e.key=="?" || e.key=="F1") showHelp();
        } else if(gameState == "paused") {
            if(e.key=="?" || e.key=="Escape" || e.key=="F1") gameState = "running";
        }
};

document.querySelector("html").onkeydown = function(e){                                 
    if(gameState == "running") {            
        if(e.key=="ArrowUp") player.tryMove(0, -1);
        if(e.key=="ArrowDown") player.tryMove(0, 1);
        if(e.key=="ArrowLeft") player.tryMove(-1, 0);
        if(e.key=="ArrowRight") player.tryMove(1, 0);
    }
};

setInterval(draw, 15);

setupCanvas();