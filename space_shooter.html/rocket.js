class Rocket{
    constructor(){

        this.position={
            x:canvas.width/2.5,
            y:canvas.height/1.5
        };

        this.velocity={
            x:0,
            y:0
        };
        
        this.size=60;


        this.img= new Image();
        this.img.src='./rocket.png';

    }

    draw(){
        c.beginPath();
        c.fillStyle='blue';
        c.drawImage(this.img,this.position.x, this.position.y,this.size,this.size);
        
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