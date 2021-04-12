var canvas;
var music;
var box1,box2,b0x3,box4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(90,580,160,20);
    box1.shapeColor="red";
    box2=createSprite(270,580,160,20);
    box2.shapeColor="green";
    box3=createSprite(450,580,160,20);
    box3.shapeColor="yellow";
    box4=createSprite(630,580,160,20);
    box4.shapeColor="pink";

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="black";
    ball.velocityX=5;
    ball.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
edges=createEdgeSprites();
ball.bounceOff(edges);
/*ball.bounceOff(box1);
ball.bounceOff(box2);
ball.bounceOff(box3);
ball.bounceOff(box4);*/

if (ball.isTouching(box1)&&ball.bounceOff(box1)){
    ball.shapeColor="red";
    music.play();
}
if (ball.isTouching(box2)&&ball.bounceOff(box2)){
    ball.shapeColor="green";
    music.play();
}
if (ball.isTouching(box3)&&ball.bounceOff(box3)){
    ball.shapeColor="yellow";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
if (ball.isTouching(box4)&&ball.bounceOff(box4)){
    ball.shapeColor="pink";
    music.play();
}

drawSprites();    
}
