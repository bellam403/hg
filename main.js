Webcam.set({
    width:360,
    height:270,
    image_format:'png' ,
    png_quality:90
}) ;
camera = document.getElementById("camera") ;

Webcam.attach('#camera') ;

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="resultImage" src='+data_uri+'>' + '<br>' + '<br>' + '<button style="background-color:white ;color: black; font-weight: bolder; border:1px solid black;border-radius: 20px;width:150px;height:50px;" id="identifyBtn" onclick="identifyGesture();"> Identify Gesture' + "</button>" ;
    }) ;
}


console.log("ml5 version is:" + ml5.version) ;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WPBBVd3bL/model.json' , modelIsLoaded) ;

function modelIsLoaded()
{
    alert("You can start clicking the photos!") ;
    console.log("Model is loaded now") ;
}

function identifyGesture(){
    image = document.getElementById("resultImage") ;
    classifier.classify(image, identify) ;
}
function identify(error, result)
{
if(error) {
    console.error ;
}
else{
    console.log(result)
}
}
