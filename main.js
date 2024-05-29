var dog=0;
var cat = 0; 
var lion = 0;
var cow = 0;
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZjaMWYLBN/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1; 
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
    
        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - " +cat+ ", Detected lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected whice Is of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label=="Barking"){
            img.src="https://image.freepik.com/free-vector/adorable-dog-sitting-cartoon_74769-8.jpg";
            dog=dog+1
        }
        else if(results[0].label=="Meowing"){
            img.src="https://static.vecteezy.com/system/resources/previews/002/543/419/large_2x/cute-cat-or-kitten-animal-meow-cartoon-fluffy-pets-exact-collection-illustration-cartoon-meow-cat-vector.jpg";
            cat=cat+1;
        }
        else if(results[0].label=="Roar"){
            img.src="https://png.pngtree.com/background/20230522/original/pngtree-an-animated-cartoon-lion-sitting-on-a-white-background-picture-image_2693334.jpg";
            lion=lion+1;
        }
        else if(results[0].label=="Mooing"){
            img.src="https://static.vecteezy.com/system/resources/previews/005/112/497/original/cute-little-cow-cartoon-sitting-free-vector.jpg";
            cow=cow+1;
        }
        else{
            img.src="ear.gif";
        }
}
}