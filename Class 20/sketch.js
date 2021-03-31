function setup(){
  createCanvas(400,400)

  fixedrect=createSprite(250,150,40,60)
  fixedrect.shapeColor="yellow"
  movingrect=createSprite(100,200,40,60)
  movingrect.velocityY=-1
  movingrect.velocityX=2
  movingrect.shapeColor="yellow"
} 


function draw(){
  background("red")

 // movingrect.x=World.mouseX
 // movingrect.y=World.mouseY
//collision algorithem
/*if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="blue"
}
else {
     movingrect.shapeColor="yellow"
     fixedrect.shapeColor="yellow"
}*/

if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.velocityX=movingrect.velocityX*(-1)
    movingrect.velocityY=movingrect.velocityY*(-1)
  
}

  drawSprites();
}