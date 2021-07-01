Webcam.set({width:390, height:300, image_format:"png", png_quality:90});

var camera=document.getElementById("camera");
Webcam.attach(camera);


function take_snapshot(){
    Webcam.snap(function (data_url){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_url+"'>";
    });
}

console.log("ML5 Version: ",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ID-zbvHr5/model.json",modelLodaed);


function modelLodaed(){
    console.log("model is lodaed");
}


function check(){
    var img=document.getElementById("capture_img");
    classifier.classify(img, gotRuselt);
    
}

function gotRuselt(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}