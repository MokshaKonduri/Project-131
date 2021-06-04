function preload() {
img=loadImage('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#ff007f");
    text("Dog",50,80);
    noFill();
    stroke("ff007f");
    rect(40,60,315,350)
}