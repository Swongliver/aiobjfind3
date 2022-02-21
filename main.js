object_name='';
objects = [];
status1 = "";
percent='';
function preload()
{
	
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.position(525,275);
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  
}





function start(){
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("detect_status").innerHTML = "Status : Detecting Objects";
object_name=document.getElementById("object").value

}


function draw() {
  image(video, 0, 0, 300, 300);
     
       
        for (i = 0; i < objects.length; i++) {
          console.log(object_name)
            document.getElementById("detect_status").innerHTML="Status: Objects Detected"
        document.getElementById("detect_objects_status").innerHTML="Object Detected="+objects[i].label; 
        fill("red")
        percent=floor(objects[i].confidence*100)
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
        noFill()
        stroke("red")
        rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width)
        if (objects[i].label==object_name) {
          objectDetector.detect(gotResult)
          document.getElementById("detect_objects_status").innerHTML="Object Mentioned Found"
        }
}}
function modelLoaded(){
 objectDetector.detect(video,gotResult)
  console.log("model loaded")
  video.loop()
  video.volume(0)
  video.speed(1)
status1=true;
  }
function gotResult(error, results){
  if (error) {
      console.log(error)
  }else{
      objects=results;
      console.log(results)
  }

}
