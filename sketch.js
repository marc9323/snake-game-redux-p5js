let snake;
let rez = 20; // snake is 10 x 10, world is 40 by 40, window 400 x 400
let food;
// variables to track dimensions of the world
let w;
let h;

function setup(){
    createCanvas(400, 400);
    w = floor(width / rez); // 40
    h = floor(height / rez); // 40
    frameRate(5);
    snake = new Snake();
    foodLocation();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    // food is just a vector - a rect is drawn
    // at its location
    food = createVector(x, y);
}

function draw(){
    // scale the object
    // so when it moves by 1
    // it covers 10 pixels - moves 1 10px unit
    scale(rez);
    background(220);

    if(snake.eat(food)) {
        // snake ate food, pick a new food location
        foodLocation();
    }

    // check bounds
    //snake.checkBounds();
    snake.update();
    snake.show();

    // end game?
    if(snake.endGame()) {
        print("END GAME*****************");
        background(255, 0, 0);
        noLoop(); // shut down the sketch
    }
    

    // make food red
    noStroke(); // the stroke was being scaled strangely
    fill(255, 0, 0);
    // draw food at whatever current food location is
    rect(food.x, food.y, 1, 1); // scales up
}

// for testing -- no good, click to focus
// snake grows, head and part occupy same space in 
// check, game ends
// function mousePressed(){
//     snake.grow();
// }

function keyPressed() {
    let head = snake.body[snake.body.length - 1];
    print("HEAD: " + head);
    
        if(keyCode === LEFT_ARROW ){
            snake.setDir(-1, 0);
        } else if(keyCode === RIGHT_ARROW) {
            snake.setDir(1, 0);
        } else if(keyCode === DOWN_ARROW) {
            snake.setDir(0, 1);
        } else if(keyCode === UP_ARROW) {
            snake.setDir(0, -1);
        }

        // testing, grow snake
        if(key == ' ') {
            snake.grow();
        }
    
}