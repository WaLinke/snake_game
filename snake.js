class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.movex = 10;
        this.movey = 0;
        this.tail = [];
    }
    update() {
        this.x += this.movex;
        this.y += this.movey;
    }
    show() {
        fill(255);
        rect(this.x,this.y,10,10);
        for(var i=0;i<this.tail.length;i++) {
            rect(this.tail[i].x,this.tail[i].y,10,10);
        }
    }
    changeDirection(x,y) {
        this.movex = this.movex == -x ? this.movex : x;
        this.movey = this.movey == -y ? this.movey : y;
    }
    eat(x,y) {
        if(this.x == x && this.y == y) {
            this.tail.push({x:x,y:y});
            score += 9;
            return true;
        } else {
            this.tail.shift();
            this.tail.push({x:this.x,y:this.y});
            return false;
        }
    }
    die() {
        for(var i=0;i<this.tail.length;i++) {
            if((this.x === this.tail[i].x && this.y === this.tail[i].y) ||
            (this.x < 0 || this.y <0 || this.x >= width || this.y >= height)) {
                lastScore = score;
                if(score > +getCookie('bestScore')) {
                    document.cookie = 'bestScore=' + score + ';';
                }
                this.reset();
            }
        }
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.movex = 10;
        this.movey = 0;
        this.tail = [];
        score = 0;
    }
}
