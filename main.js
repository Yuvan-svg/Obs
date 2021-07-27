img="";
status="";
function preload(){
img = loadImage('dog_cat.jpg');
}
function setup(){
canvas= createCanvas(640,420);
canvas.center();
objectDetector= ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
console.log("Model is Loaded");
status= true;
objectDetector.detect(img,gotResult);
}

function draw(){
image(img,0,0,640,420);
fill("#ff0000");
text("Dog",45,25);
noFill();
stroke("#ff0000");
rect (34,23,56,45);

fill("#ff0000");
text("Cat",145, 30);
noFill();
stroke("#ff0000");
rect(34,23,45,34);
}