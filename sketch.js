var dog;
var dogImg, happyDogImg
var database;
var foodS, foodStock;
var din, days;
var milky;
var feed, add;
var feedTime, lastFed;
var foodObj;
var bowl, bowlImg1, bowlImg2;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");

  bowlImg1 = loadImage("images/DogBowl.png");
  bowlImg2 = loadImage("images/DogMilk.png");
}

function setup() {
	createCanvas(800, 500);
  
  //Center = 685, 312, 1365, 624;

  database = firebase.database();
  dog = createSprite(650, 250);
  dog.addImage(dogImg);
  dog.scale = 0.2

  din = database.ref('Days');
  din.on("value", readDays);

  //foodObj = new Food();

  feed = createButton("Feed Dog");
  feed.position(600, 200);

  add = createButton("Add Food");
  add.position(700, 200);

  bowl = createSprite(650, 700, 10, 10);
  //bowl.addImage(bowlImg1);
  //bowl.scale = 2
}


function draw() 
{  
  background(46, 139, 87);

  //console.log(bowl.depth);

  /*if(keyWentDown("space") && foodS > 0)
  {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }*/

  if(frameCount % 200 === 0)
  {
    dog.addImage(dogImg);
    writeDays(days);
  }
  
  drawSprites();

  textSize(20);
  fill("red");
  text("Doodh Remaining:- " + foodS, 50, 430);
  text("Day:- " + days, 50, 400);

  //fill("yellow");
  //text("Note: Press Space Bar key to feed your TOMMY!!", 30, 50);

  //console.log(foodStock + "   " + foodS);
}

function readDays(data)
{
  days = data.val();
}

function writeDays(y)
{
  y++

  database.ref('/').update({
    Days: y
  })
}