const revealBtn = document.querySelector('.revealBtn');

const hiddenBtn = document.querySelector('.hiddenBtn');

function buttonReview(){
    if(hiddenBtn.classList.contains('revealBtn')){
        hiddenBtn.classList.remove('revealBtn')
    } else {
        hiddenBtn.classList.add('revealBtn')
    }
}

revealBtn.addEventListener('click', buttonReview);