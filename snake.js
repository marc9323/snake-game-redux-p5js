class Snake {

    constructor() {
        // length of the snake
        this.len = 0;
        this.body = [];
        this.body[0] = createVector(0, 0);
        // direction the snake is moving - up, down, right,left
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y){
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        
        
        
        // save the head position, 
        // make a copy of the last element
        let head = this.body[this.body.length - 1].copy();
        // shift - shift all the elements down 1 and returns/lose 1
        this.body.shift();
        head.x += this.xdir; // update position
        head.y += this.ydir;
        this.body.push(head); // add it to end of array
        // this.body[0].x += this.xdir;
        // this.body[0].y += this.ydir;
    }

    endGame() {
        
    }

    eat(pos){ // needs to check the last element
        // get head of the snake location against food
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;

        if(x == pos.x && y == pos.y){
            // snake ate, so grow
            this.grow();
            return true;
        }

        return false;
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        // increment length
        this.len++;// unneeded, length of array is len
        // push an empty vector to end of array
        this.body.push(head); // take the last one and add it to the end
       

    }

    show() {
        // when snake is drawn, draw all the rectangles
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            print(i);
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
        

    }
}