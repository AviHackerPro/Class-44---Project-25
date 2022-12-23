var bg, bgImg
var logo, logoImg

function preload() {
  bgImg = loadImage("assets/Background.jpg")
  logoImg = loadImage("assets/Logo.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  bg = createSprite(displayWidth / 2, displayHeight / 2);
  bg.addImage(bgImg);
  bg.velocityX = 0;
  bg.scale = 2

  logo = createSprite(displayWidth / 2 - 500, displayHeight / 2 - 260);
  logo.addImage(logoImg);
  logo.scale = 0.50
}

function draw() {
  background(255, 255, 255);
  drawSprites();
}