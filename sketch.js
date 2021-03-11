var cat,mouse,cat1,cat2,cat3,mouse1,mouse2,mouse3;
var garden,gardenImage;
function preload(){
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat4=loadAnimation("images/cat4.png");
    
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
    gardenImage=loadImage("images/garden.png");
}
function setup(){
    createCanvas(2000,1000);
    cat=createSprite(1600,900,20,20);
    cat.addAnimation("sleeping",cat1);
    cat.scale=0.3;
    mouse=createSprite(500,900,20,20);
    mouse.addAnimation("eating",mouse1);
    mouse.scale=0.2;
}
function draw(){
    background(gardenImage);
    keypressed();
       // mouse.addAnimation("teasing",mouse2);
    
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
      cat.velocityX=0;
      cat.x=300;
      cat.addAnimation("sitting",cat4);
      cat.changeAnimation("sitting");
      mouse.addAnimation("sitting",mouse3);
      mouse.changeAnimation("sitting");
    }
    drawSprites();
}
function keypressed(){
    if(keyDown("left")){
        
        cat.addAnimation("catrunning",cat2);
        cat.frameDelay=25
       cat.changeAnimation("catrunning");
       cat.velocityX=-4;
      
        mouse.addAnimation("teasing",mouse2);
        mouse.changeAnimation("teasing");
}
}
