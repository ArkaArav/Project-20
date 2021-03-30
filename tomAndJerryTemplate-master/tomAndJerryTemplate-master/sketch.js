
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    cat1 = loadImage("images/cat1.png")
    cat2 = loadImage("images/cat2.png")
    cat3 = loadImage("images/cat3.png")
    cat4 = loadImage("images/cat4.png")
    mouse1 = loadImage("images/mouse1.png")
    mouse2 = loadImage("images/mouse2.png")
    mouse3 = loadImage("images/mouse3.png")
    mouse4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addImage(cat1)
    cat.scale = 0.2
    mouse = createSprite(200,600)
    mouse.addImage(mouse1)
    mouse.scale = 0.15


}

function draw() {

    background(bg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.addImage(cat4)
        cat.x = 300
        cat.scale = 0.2
        mouse.addImage(mouse3)
        mouse.scale = 0.15
    }


    
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.velocityX = -5
        cat.addImage(cat3)
        mouse.addImage(mouse1)
    }

  


}
