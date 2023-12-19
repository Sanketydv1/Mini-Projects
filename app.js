let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// for click in form to change icon sign-in or sign-up button
signinbtn.onclick = function(){

    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}

signupbtn.onclick = function(){

    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}

//for pop-up login form on click button 

function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.form-box').classList.add ('showoForm-box');
}
function closeModal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.form-box').classList.remove('showoForm-box');
}
    var btnlogin = document.querySelector('.sign-in');
    btnlogin.addEventListener("click", showModal);

    var close=document.querySelector("span");
    close.addEventListener("click", closeModal)