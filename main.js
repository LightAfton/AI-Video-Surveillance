function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video.hide();
}

video="";

function preload() 
{
    video=createVideo('video.mp4');
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("Status").innerHTML="status:detecting objects";
}

function modelloaded()
{
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}