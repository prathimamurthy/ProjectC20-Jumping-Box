var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,200,30)
    surface2=createSprite(295,580,200,30)
    surface3=createSprite(515,580,200,30)
    surface4=createSprite(740,580,200,30)
    //create box sprite and give velocity
    box=createSprite(random(20,750),400,20,20);
    box.shapeColor="white"
    box.velocityX = 15;
    box.velocityY=15;
    surface1.shapeColor = "pink";
    surface2.shapeColor="orange";
    
    surface3.shapeColor="blue";
    surface4.shapeColor="green"; 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites();
    drawSprites();

    box.bounceOff(edges);

    if(surface1.isTouching(box)){
        box.shapeColor = surface1.shapeColor;
        box.velocityX= 0;
        box.velocityY= 0;
    }

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
    }

}
