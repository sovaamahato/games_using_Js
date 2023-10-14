let canvas=document.getElementById("canvas");
let c=canvas.getContext("2d");



const rocket =new Rocket();



let bulletHaru=[];


function loop(){
    c.clearRect(0,0,canvas.width,canvas.height);
    
rocket.update();
for(let i=0;i<bulletHaru.length;i++){
    bulletHaru[i].update();


}

    window.requestAnimationFrame(loop);
}

loop();


//controlling the rocket box with arrow keyof keyboard
document.addEventListener('keydown',(e)=>{
    if(e.code=="ArrowUp")rocket.velocity.y=-5;
    if(e.code=="ArrowDown")rocket.velocity.y=5;
    if(e.code=="ArrowLeft")rocket.velocity.x=-5;
    if(e.code=="ArrowRight")rocket.velocity.x=5;
    if(e.code=="Space"){
        bulletHaru.push(new Bullet(rocket.position.x + rocket.size / 2.8, rocket.position.y));
        
    }
    
});


document.addEventListener('keyup',(e)=>{
    if(e.code=="ArrowUp")rocket.velocity.y=0;
    if(e.code=="ArrowDown")rocket.velocity.y=0;
    if(e.code=="ArrowLeft")rocket.velocity.x=0;
    if(e.code=="ArrowRight")rocket.velocity.x=0;
    
});
