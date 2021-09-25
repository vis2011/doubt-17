var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snowfall;
var bg;
var ground;
var pushSnow=[];
function preload(){
  bg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);

 // for(var i=20; i<=width-10; i=i+50 ){
   // pushSnow.push(new snow(50,100),0)
  //}
}
 


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();                            

   if(frameCount%60===0){
    pushSnow.push(new snow(random(50,800),0,90,90));
  }

 for (var a=0; a < pushSnow.length; a++){
   pushSnow[a].display();
 }
}