const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();

});


function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querrySelector('.error');

    errorDisplay.innerText = message;
    inputControl.ClasssList.add('error');
    inputControl.ClasssList.remove('success');

    function setSuccess(element){
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querrySelector('.error');

        errorDisplay.innerText = ' ';
        inputControl.ClasssList.add('success');
        inputControl.ClasssList.remove('error');
    }
};

function validateInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(username === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }

    if(email === ''){
        setError(email, 'Email is required');
    }
}