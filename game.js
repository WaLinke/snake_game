var snake;
var food;
var score = 0;
var lastScore = 0;
var keyHasBeenPressed = false;

function setup() {
    if(getCookie('bestScore') == '') {
        document.cookie = 'bestScore=0;'
    }
    var canvas = createCanvas(300,300);
    canvas.parent('application_frame');
    frameRate(10);
    snake = new Snake();
    food = new Food();
}

function draw() {
    background(60);
    document.getElementById('current_score').innerHTML = score;
    document.getElementById('last_score').innerHTML = lastScore;
    document.getElementById('best_score').innerHTML = getCookie('bestScore');
    snake.update();
    if(snake.die()) return;
    if(snake.eat(food.x,food.y)) {
        food.pop(snake);
    }
    food.show();
    snake.show();
    keyHasBeenPressed = false;
}

function keyPressed() {
    if(!keyHasBeenPressed) {
        switch(keyCode) {
            case UP_ARROW : 
                snake.changeDirection(0,-10);
                break;
            case RIGHT_ARROW : 
                snake.changeDirection(10,0);
                break;
            case DOWN_ARROW : 
                snake.changeDirection(0,10);
                break;
            case LEFT_ARROW : 
                snake.changeDirection(-10,0);
                break;
            case 32 : 
                if(isLooping()) {
                    noLoop();
                } else {
                    loop();
                };
                break;
        }
        keyHasBeenPressed = true;
    }
}