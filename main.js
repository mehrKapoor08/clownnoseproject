noseX= 0;
noseY= 0;
clownNose="";
function preload(){
clownNose= loadImage("https://i.postimg.cc/3NLPK88z/Clown-nose-large.png")
};
function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
image(video, 0, 0 , 300 , 300);
image(clownNose, noseX-13, noseY-13, 30, 30);
}
function takeSnapshot(){
    save('myFilterImg.png');
}
function modelLoaded(){
console.log('modelLoaded')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log('noseX ='+ noseX);
console.log('noseY =' + noseY);
    }
}
