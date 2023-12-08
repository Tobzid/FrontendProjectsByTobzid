/* The Javascript code for the two buttons in the first section starts here */
const slides = document.querySelectorAll('.slide');
var counter = 0;

slides.forEach((slide, index) =>{
    slide.style.left = `${index * 100}%`
})


const goPrev = () =>{
    counter--
    slideImage()
}

const goNext = () =>{
    counter++
    slideImage()
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
/* The Javascript code for the two buttons in the first section ends here */

/* The Javascript code for automatially sliding the images in the first section starts here */
var i = 0;
var images = [];
var time = 5000;

// image lists
images[0] = 'images/prof1.avif';
images[1] = 'images/students-play-sports3.jpg';
images[2] = 'images/prof2.jpg';
images[3] = 'images/studentsport1.jpg';
images[4] = 'images/disctrict.jpg';

// change images
function changeImg(){
    document.change.src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;
/* The Javascript code for automatially sliding the images in the first section ends here */

/* The date in the footer section (selecting the span date)*/
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
console.log("man");


/* The Hamburger starts here */
const Hamburger = document.querySelector(".nav-check-One");
const closeHamburger = document.querySelector(".nav-check-Two");
const navigation = document.querySelector(".NavBar");

Hamburger.addEventListener("click", () => {
    Hamburger.classList.remove("active");   
    closeHamburger.classList.add("active");
    navigation.classList.add("active");
    //Hamburger.classList.remove("active");   
});

closeHamburger.addEventListener("click", () => {
    closeHamburger.classList.remove("active");
    Hamburger.classList.remove("active");   
    navigation.classList.remove("active");
});