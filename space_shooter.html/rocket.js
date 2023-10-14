class Rocket{
    constructor(){

        this.position={
            x:canvas.width/2.5,
            y:canvas.height/2.5
        };

        this.velocity={
            x:0,
            y:0
        };
        
        this.size=40;

    }

    draw(){
        c.beginPath();
        c.fillStyle='blue';
        c.fillRect(this.position.x, this.position.y,this.size,this.size);
        
    }
    move(){
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
    }

    update(){
        this.draw();
        this.move();
    }

}