Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90
})

window.onload = function() {
    Webcam.attach('#camera');
}

var Predict1 = "";
var Predict2 = "";

var Camara = document.getElementById("camera");

Webcam.attach('#camera');

function take() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = '<img id="imagen" src="' + datauri + '"/>';
    });
}
console.log("ml5 version " + ml5.version);

var Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-uSjpeEsj/model.json", modelLoaded);

function modelLoaded() {
    console.log("ModelLoaded");
}
function speak() {
    var speech = window.speechSynthesis;
    var speech1 = "La 1ra prediccion es: " + Predict1;
    var speech2 = "La 2da prediccion es: " + Predict2;
    var texto = new SpeechSynthesisUtterance(speech1 + speech2);
    speech.speak(texto);
}
function check() {
    var capture = document.getElementById("imagen");
    Classifier.classify(capture, result);

}
function result(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        Predict1 = result[0].label;
        Predict2 = result[1].label;
        document.getElementById("emotion_result").innerHTML = Predict1;
        document.getElementById("emotion_result2").innerHTML = Predict2;
        speak();
        if (Predict1 == "Feliz") {
            document.getElementById("update_emoji").innerHTML = "😀";
        }
        if (Predict1 == "Enojado") {
            document.getElementById("update_emoji").innerHTML = "😡";
        }
        if (Predict1 == "Triste") {
            document.getElementById("update_emoji").innerHTML = "😔";
        }
        if (Predict2 == "Feliz") {
            document.getElementById("update_emoji2").innerHTML = "😀";
        }
        if (Predict2 == "Enojado") {
            document.getElementById("update_emoji2").innerHTML = "😡";
        }
        if (Predict2 == "Triste") {
            document.getElementById("update_emoji2").innerHTML = "😔";
        }
    }
}
function regresar(){
    window.location = "sala.html"
}