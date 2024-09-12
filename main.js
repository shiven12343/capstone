
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
    console.log('Model Loaded')
}
function draw(){
    image(video, 0, 0, 300, 300);
}
