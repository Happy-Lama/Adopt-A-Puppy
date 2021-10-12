var images = ["Puppy_1.jpeg","Puppy_2.jpeg","Puppy_3.jpeg","Puppy_4.jpeg"];
const img_dir = "static/images/";
var image = document.querySelector("#slide");
const slideshow = document.querySelector("#slideshow");

var current_img = 0;

function previous_img(){
    current_img--;
    if(current_img < 0){
        current_img = images.length - 1;
    }
    image.src = img_dir + images[current_img]
    // console.log(images[current_img]);

}
function next_img(){
    current_img++;
    if(current_img == images.length){
        current_img = 0;
    }
    image.src = img_dir + images[current_img];
    // console.log(images[current_img]);

}
document.addEventListener("DOMContentLoaded",function(){
    
    setInterval(next_img,1500);

    slideshow.addEventListener("click",function(e){
        let midscreen = screen.width/2;
        if(e.x < midscreen - 100){
            previous_img();
        }
        if(e.x > midscreen + 100){
            next_img();
        }
    })
    
})