class Food {
    constructor() {
        this.x = Math.round(random(width-10)/10)*10;
        this.y = Math.round(random(height-10)/10)*10; 
    }

    pop(snake) {
        var positionTaken = false;
        var x = Math.round(random(width-10)/10)*10;
        var y = Math.round(random(height-10)/10)*10; 
        for(var i=0;i<snake.tail.length;i++) {
            if(snake.tail[i].x === x && snake.tail[i].y === y) {
                positionTaken = true;
            } 
        }
        if(positionTaken === true) {
            this.pop(snake);
        } else {
            this.x = x;
            this.y = y;
            return;
        }
    }

    show() {
        fill(255,0,100);
        rect(this.x,this.y,10,10);
    }
}