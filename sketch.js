var car, wall;
var speed, weight;

var s = Math.random(200, 300);
var w = Math.random(300, 1200);

speed = s;
weight = w;
wall.shapeColor(80, 80, 80);



function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500, 200, 109, 200);
  car.velocityX = speed;
}

function draw() {

  background(0);

  //car.collide(wall);

  if (car.x > 1415) {

  var deformation = 0.5 * speed * weight * speed / 22500;
  car.velocityX = 0;

    if (180 > deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    
  }

  drawSprites();

}