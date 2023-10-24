var i = 0;
var images = [];
var time = 3000;

//image lists
images[0] = 'products/01.jpg';
images[1] = 'products/02.jpg';
images[2] = 'products/03.jpg';
images[3] = 'products/04.jpg';

//change the image
function changeImg(){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;