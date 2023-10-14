let canvas=document.getElementById("canvas");
let c=canvas.getContext("2d");

canvas.width=500;
canvas.height=400;

class Box{
    constructor(){
        this.position={
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height
        };

        this.size={
            x:20,y:20
        };

        this.velocity={
            x:2,
            y:2
        }
    }

    draw(){
        c.beginPath();
        c.fillStyle='blue';
        c.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);

    }

    move(){
        this.position.y+=this.velocity.y+0.5;
        this.position.x+=this.velocity.x+1;
    }

    checkBorderCollision(){
        if(this.position.x+this.size.x>=canvas.width ){
           this.velocity.x=this.velocity.x-1;
           
        }

        if(
            this.position.y+this.size.y>=canvas.height){
                this.velocity.y=this.velocity.y-1;
            }

            if(
                this.position.x<=0){
                    this.velocity.x=this.velocity.x+1;
                }

                if(
                    this.position.y<=0){
                        this.velocity.y=this.velocity.y+1;
                    }
               

    }

    checkcBoxCollision(){
        
    }

    update(){
        this.draw();
        this.move();
        this.checkBorderCollision();
    }
}


// const box1 =new Box();
// const box2 =new Box();
let boxKoCollection=[];
for(let i=0;i<20;i++){
    const box =new Box();
    boxKoCollection.push(box);
}


function loop(){
    c.clearRect(0,0,canvas.width,canvas.height);
    
// box1.update();
// box2.update();
    for(let i=0;i<boxKoCollection.length;i++){
        boxKoCollection[i].update();

    }
    
    window.requestAnimationFrame(loop);
}

loop();