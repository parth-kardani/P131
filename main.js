status="";

function preload(){
img= loadImage("IMG.JPG");
}

function setup(){
    canvas= createCanvas(650,400);
    canvas.center();
    objectDetecter=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML= "status: Detecting object";
    }
    
    function draw(){
    image(img, 0, 0, 650,400);
    
    fill("#FF0000");
    stroke("#FF0000");
    text("Remote",200,60);
    noFill();
    rect(30,60,500,370 );
    
    
    }
    
    function modelloaded(){
        console.log(" model is loaded");
        status="true";
        objectDetecter.detect(img,gotResult);
    }
    
    function gotResult(error,results){
    if( error){
        console.error(error);
    }
    else{
        console.log(results);
    
    }
    }