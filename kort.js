var tiles = [];
let passableTiles=0;

function generateLevel() {
    //generateTiles();
    reynaRigga('rigga kortinu', function(){
        return generateTiles() == randomPassableTile().getConnectedTiles().length;
    });
}

function generateTiles() {
    for(let i=0;i<numTiles;i++) {
        tiles[i] = [];
        for(let j=0;j<numTiles;j++) {
            if(Math.random() < 0.3 || !inBounds(i, j)) {
                tiles[i][j] = new Wall(i,j);
            } else {
                tiles[i][j] = new Floor(i,j);
                passableTiles++;
            }
        }
    }
    return passableTiles;
}

function inBounds(x,y) {
    return x>0 && y>0 && x<numTiles-1 && y<numTiles-1;
}

function getTile(x, y) {
    if(inBounds(x,y)) {
        return tiles[x][y];
    } else {
        return new Wall(x,y);
    }
}

function randomPassableTile() {
    let tile;
    reynaRigga('finna random yfirstiganlega flis', function() {
        let x = randomRange(0,numTiles-1);
        let y = randomRange(0,numTiles-1);
        tile = getTile(x, y);
        return tile.passable && !tile.monster;
    });
return tile;
}