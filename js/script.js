var username = document.getElementById('username');
var user_err = document.getElementById('user_err');
var  email = document.getElementById('email');
var email_err = document.getElementById('email_err');
var password = document.getElementById('password');
var pass_err = document.getElementById('pass_err')
var pass_regux = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var confirm_password = document.getElementById('confirm_password');
var confirm_password_err = document.getElementById('confirm_password_err');
var show = document.getElementById('show')
var show_one = document.getElementById('show_one')


function signup() {
    if (username.value == ''){
      user_err.innerHTML = 'please enter your name';
      username.style.border = '1px solid red';
      return false;
    }

    if (email.value == '') {
       email_err.innerHTML = 'enter your email';
       email.style.border = '1px solid red';
       return false;
    }
    if (password.value == ''){
        pass_err.innerHTML = 'enter your password';
        password.style.border = '1px solid red';
        return false;
    }
    if (!pass_regux.test(password.value)) {
        pass_err.innerHTML = 'you must use 8 letter password, with at least a symbol, upper and lower case letters and a number';
        password.style.border = '1px solid red'
        return false;
    }
    if (confirm_password.value == '') {
        confirm_password_err.innerHTML = 'confirm your password';
        confirm_password.style.border = '1px solid red';
        return false;
    }
    if (!pass_regux.test(confirm_password.value)) {
        confirm_password_err.innerHTML = 'you must use 8 letter password, with at least a symbol, upper and lower case letters and a number';
        confirm_password.style.border = '1px solid red'
        return false;
    }
    if (password.value !== confirm_password.value) {
        confirm_password_err.innerHTML = 'Enter your correct password';
        confirm_password.style.border = '1px solid red';
    }
    if (password.value == confirm_password.value){
        confirm_password_err.innerHTML = '';
        confirm_password.style.border = '1px solid green';
    }
   
}

function eye_button() {
    if (password.type == 'password') {
        password.type = 'text';
        show.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        password.type = 'password'
        show.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
    
}

function eye_button_one() {
    if (confirm_password.type == 'password') {
        confirm_password.type = 'text';
        show_one.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        confirm_password.type = 'password'
        show_one.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}


function valid(){
    if(username.value !== ''){
        user_err.innerHTML = '';
        username.style.border = '1px solid green';
    }
    if(email.value !== ''){
       email_err.innerHTML = '';
        email.style.border = '1px solid green';
    }
    if (password.value !== ''){
        pass_err.innerHTML = '';
        password.style.border = '1px solid green';
    }
 
 
}
username.addEventListener ('blur', valid);
email.addEventListener ('blur', valid);
password.addEventListener ('blur', valid);
confirm_password.addEventListener('blur', valid);

// console.log('email')

// console.log('email_err');







