var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var forest , forestImage;



function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
forestImage = loadImage("forest2.jpg");
}


function setup() {
  createCanvas(600, 600);


  monkey = createSprite(150, 400, 40, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(300, 500, 600, 10);
  ground.visible = true;
  ground.x = ground.width / 2;



  score = 0;


}


function draw() {
  background(225);

   score = score + Math.round(getFrameRate()/60);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time: " + score, 300, 50);
 

  if (keyDown("space") ) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);


  spawnObstacles();

  bananas();

  console.log(monkey.y);

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 470, 10, 40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(6 + score / 100);
    obstacle.lifetime = 200;
    obstacle.scale = 0.2;
  }

}

function bananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale = 0.2;

    //assign lifetime to the variable
    banana.lifetime = 200;


  }
}