mustage_x=0;
mustage_y=0;

function preload(){
    mustage = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);

}

function draw(){
    image(video,0,0,300,300);
    image(mustage,mustage_x,mustage_y,60,45);

}
function take_snapshot(){
    save ('agnijeet.png');
}

function modelloaded(){
    console.log('poseNet is Initiallzed');
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustage_x = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        mustage_y = results[0].pose.nose.y;
    }
}