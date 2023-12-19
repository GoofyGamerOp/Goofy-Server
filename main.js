function setup(){
    noseX=0;
    noseY=0;
    difference=0;
    leftWrist=0;
    rightWrist=0;
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is intialized')
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX='+ noseX + 'noseY='+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX)
        console.log('leftWristX='+ leftWristX + 'rightWristX='+ rightWristX + 'difference='+ difference );
    }
}

function draw(){
    background( '#30D5C8' );
    document.getElementById("square_side").innerHtml="Width and Height of the Square will be"+ difference +'px';
    fill('#008080');
    stroke('black');
    square(noseX,noseY,difference);

    
}
