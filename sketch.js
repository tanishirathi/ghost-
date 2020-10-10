var Gamestate = "play"
var t1,t2;
var d1,d2,d3;
var c1,c2,c3;
var g1,g2;
var I1,I2;
var s1
function preload(){
t1=loadImage("tower.png");
d1=loadImage("door.png");
c1=loadImage("climber.png"); 
g1=loadImage("ghost-standing.png");
s1=loadSound("spooky.wav");
  
}
 function setup(){
createCanvas(600,600)  
t2=createSprite  (300,300) 
t2.addImage(t1);
t2.velocityY=1;
   
g2=createSprite(200,200);
g2.addImage(g1);
g2.scale=0.3;

d3=new Group();
c3=new Group();  
I2=new Group();


 }

function draw(){
background(0);
if(Gamestate==="play"){
if(keyDown("space")){
g2.velocityY=-8 ;  
} 
if(keyDown("right")){
g2.x=g2.x+5 ;  
}
if(keyDown("left")){
g2.x=g2.x-5 ;  
}

if(c3.isTouching(g2)){
g2.velocityY=0;
}
g2.velocityY=g2.velocityY+0.8;
drawSprites();  
if(t2.y>400){
t2.y=300;} 

s1.play();
if(I2.isTouching(g2)||g2.y>600){
g2.destroy();


  Gamestate="end";
}
spawnDoor();
}
if(Gamestate==="end"){
textSize(30);
fill("white")
text("GAME OVER",200,300)
}}
function spawnDoor(){
if(frameCount%200===0){
d2=createSprite(200,50);
d2.velocityY=1 
d2.addImage(d1);
d2.x=Math.round(random(100,400))
d2.lifetime=600;
d3.add(d2);
c2=createSprite(200,100);
c2.addImage(c1);
c2.velocityY=1;
c2.x=d2.x;
c2.lifetime=600;
c3.add(c2);
g2.depth=d2.depth+1;
I1=createSprite(200,110,100,2);
I1.x=d2.x;
I1.velocityY=1
I1.shapeColor="green"
I2.add(I1);    
I1.debug=true;
}


}