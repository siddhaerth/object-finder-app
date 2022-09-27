status="";
objects=[];

function preload(){
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    font = document.getElementById("font").value
}

function modelLoaded(){
    console.log('modelLoaded');
    status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }
function draw(){
    image(video,0,0,480,380);
    if(objects!=""){
        if(objects[i].label== objects_name){
            for(i=0;i < object.length;i++){
                document.getElementById("status").innerHTML = "Status = Object Detected";
                document.getElementById("number_of_objects").innerHTML = font + "Object Found";
    
                fill("#FF0000");
                percent=floor(objects[i].confidence * 100);
                text(objects[i].label +" "+ percent +"%"+objects[i].x+15, objects[i].y+15); 
                noFill();
                stroke("#FF0000");
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
                var synth = window.speechSynthesis;
                speak_data = objects[i].label;
        }
        objectDetector.detect(video, gotResult);
        }
    }    
}
