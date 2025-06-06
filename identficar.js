function enviar() {
document.getElementById(A).innerHTML
document.getElementById(B).innerHTML    

if (A => 4){
    var speech1 = "Te recomendamos realizar las actividades para mejorar tu estado emocional" + Predict1;
}
else {
    var speech2
}


}
function A(){
    var A = 0
    A = A +1;
    document.getElementById("A").innerHTML="A: "+A;
}
function B(){
    var B = 0
    B = B +1;
    document.getElementById("B").innerHTML="B: "+B;

}
    
    function regresar(){
        window.location = "sala.html"
}
function speak(){
    var speech = window.speechSynthesis;
    var speech1 = "Te recomendamos realizar las actividades para mejorar tu estado emocional" + Predict1;
    var speech2 = "Felicidades, puedes identificar tus emociones" + Predict2;
    var texto = new SpeechSynthesisUtterance(speech1 + speech2);
    speech.speak(texto);
}
function result(){
    if(error) {
        console.error(error);
        }
        else {
            console.log(result)
            Predict1 = result[0].label;
        Predict2 = result[1].label;
        document.getElementById("A").innerHTML = Predict1;
        document.getElementById("B").innerHTML = Predict2;
        speak();
        }
}