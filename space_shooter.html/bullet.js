class Bullet{
    constructor(x=0,y=0){

        this.position={
            x:x,
            y:y
        };

        this.velocity={
            x:0,
            y:-10,
        };
        
        this.size=10;

    }

    draw(){
        c.beginPath();
        c.fillStyle='red';
        c.fillRect(this.position.x, this.position.y,this.size,this.size);
        
    }
    move(){
        
        this.position.y+=this.velocity.y;
    }

    update(){
        this.draw();
        this.move();
    }
}