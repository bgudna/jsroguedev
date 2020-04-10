class Skrimsli {
    constructor(tile, sprite, hp){
        this.move(tile);
        this.sprite = sprite;
        this.hp = hp;
    }
     
    draw() {
        teikniteikni(this.sprite, this.tile.x, this.tile.y);
    }

    tryMove(dx, dy){
        let newTile = this.tile.getNeighbor(dx,dy);
        if(newTile.passable){
            if(!newTile.monster){
                this.move(newTile);
            }
            return true;
        }
    }

    move(tile){
        if(this.tile){
            this.tile.monster = null;
        }
        this.tile = tile;
        tile.monster = this;
    }

}

class Leikmadur extends Skrimsli {
    constructor(tile) {
        super(tile, 0, 3);
        this.isLeikmadur = true;
    }
}