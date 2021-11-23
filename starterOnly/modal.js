function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".fermer");
const form = document.forms["reserve"];

const thx = document.getElementById("Thx-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", launchModale));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchModale() {
  modalbg.style.display = "none";
}

let FormVerificationName = /^[a-z ,.'-]+$/i;

let divprenom = document.getElementById('ErrorPrenom');
let prenom = document.getElementById("first");
let erreurfirstname = divprenom.getAttribute('data-error');

let nom = document.getElementById("last");
let divnom = document.getElementById('ErrorNom');
let erreurlastname = divnom.getAttribute('data-error');

let FormVerificationEmail = /.+@.+\..+/;
let email = document.getElementById("email");
let divemail = document.getElementById("ErrorEmail");
let erreuremail = divemail.getAttribute('data-error');

let divcondition = document.getElementById("ErrorCondition");
let erreurcondition = divcondition.getAttribute('data-error');
// let number = document.getElementById("quantity");
// let divnumber = document.getElementById('ErrorNumber');
// let erreurnumber = divemail.getAttribute('data-error');

// const checkList = form.querySelectorAll('input[name="location"]');
// let date = document.getElementById("birthdate");
// let quantity = document.getElementById("quantity");

// let FormVerificationNom = /[a-zA-Z]/;
// /^[a-z ,.'-]+$/i
// european convention 
 

function FormVerification() {

  if (!FormVerificationName.test(prenom.value.trim())) {
    divprenom.textContent += erreurfirstname;
    return false;
  } 
  else{
    divprenom.textContent = "";
  }

  if (!FormVerificationName.test(nom.value.trim())) {
    divnom.textContent += erreurlastname;
    return false;
  }
  else{
    divnom.textContent = "";
  }

  if (!FormVerificationEmail.test(email.value.trim())) {
    divemail.textContent += erreuremail;
    return false;
  }
  else{
    divemail.textContent = "";
  }

  const perm = form.querySelectorAll('input[name="perm"]')[0];
  if (!perm.checked) {
    divcondition.textContent += erreurcondition;
    return false;
  } else {
    divcondition.textContent = "";
  }
  
  return true
}


form.addEventListener("submit", 
  (e) => {
    e.preventDefault();
   // let Errors = 0;
    if(FormVerification()){
      form.style.display = 'none';
      thx.style.display = 'flex';
    }
  // console.log(FormVerification())
  })

  