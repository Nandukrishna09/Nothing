var runner,dog;
var runnerImg,dogImg;

function preload(){
runnerImg=loadAnimation("running animation-1.PNG","running animation-2.PNG")
dogImg=loadAnimation("dog running-1.jpeg","dog running-2.jpeg")
}

function setup() {
  createCanvas(600,600)
  runner=createSprite(550,450)
}

function draw() {
 drawSprites();
}