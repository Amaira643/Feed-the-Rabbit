var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var selectSprite;
var RedLeaf,redleafImg;
var OrangeLeaf,orangeleafImg;

function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg  = loadImage("carrot.png");
    redleafImg= loadImage("redLeaf.png");
    orangeleafImg= loadImage("orangeLeaf.png");
  }

function setup(){
  
    createCanvas(400,400);


  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  

}

function draw() {
      background(0);


      edges= createEdgeSprites();
      rabbit.collide(edges);

      rabbit.x=World.mouseX;

    selectSprite = Math.round(random(1,3)); 
    if (frameCount % 60===0){
      
      if (selectSprite === 1) { 
        createApples();
        
      } 
      else if (selectSprite === 2) { createOrangeLeaf(); 
                                  }
      else { createRedLeaf(); 
           } 
    }
      drawSprites();
    }

function createApples() {
 
  apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale=0.09;
    apple.velocityY=3;
}

function createRedLeaf(){
  RedLeaf=createSprite(random(50,350),40,10,10);
  RedLeaf.addImage(redleafImg);
  RedLeaf.scale=0.07;
  RedLeaf.velocityY=3;
  
}
function createOrangeLeaf(){
  OrangeLeaf=createSprite(random(50,350),40,10,10);
  OrangeLeaf.addImage(orangeleafImg);
  OrangeLeaf.scale=0.07;
  OrangeLeaf.velocityY=3;
}
    
  
