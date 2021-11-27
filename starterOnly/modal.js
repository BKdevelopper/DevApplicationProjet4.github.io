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
const cleardata = document.querySelectorAll(".cleardata");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", launchModale));
cleardata.forEach((btn) => btn.addEventListener("click", clear));
// launch modal form

function clear(){
  form.style.display = 'block';
  thx.style.display = 'none'; 
  document.getElementById('dataForm').reset();
}
function launchModal() {
  modalbg.style.display = "block";
  
}

function launchModale() {
  modalbg.style.display = "none";
  
}

let FormVerificationName = /^[a-z ,.'-]+$/i;
let divprenom = document.getElementById('ErrorPrenom');
let prenom = document.getElementById("first");
let nom = document.getElementById("last");
let divnom = document.getElementById('ErrorNom');
let FormVerificationEmail = /.+@.+\..+/;
let email = document.getElementById("email");
let divemail = document.getElementById("ErrorEmail");
let divcondition = document.getElementById("ErrorCondition");

const conditiongeneral = form.querySelectorAll('input[name="perm"]')[0];
//  Affichage des erreurs
function FormVerificationTextError(e) {
  e.dataset.errorVisible = 'true';
}

function FormVerificationTextCorrect(e) {
  e.dataset.errorVisible = 'false';
}

// Verification du formulaire
function FormVerification() {
  //Verification des regex
  if (!FormVerificationName.test(prenom.value.trim())) {
    FormVerificationTextError(divprenom)
    return false;
  } else {
    FormVerificationTextCorrect(divprenom)
  }

  if (!FormVerificationName.test(nom.value.trim())) {
    FormVerificationTextError(divnom)
    return false;
  } else {
    FormVerificationTextCorrect(divnom)
  }

  if (!FormVerificationEmail.test(email.value.trim())) {
    FormVerificationTextError(divemail)
    return false;
  } else {
    FormVerificationTextCorrect(divemail)
  }
  //Verification qu'une case est coché
  if (!conditiongeneral.checked) {
    FormVerificationTextError(divcondition)
    return false;
  } else {
    FormVerificationTextCorrect(divcondition)
  }
 
  return true
  
}

//
form.addEventListener("submit",
  (e) => {
    e.preventDefault();
    if (FormVerification()) {
      
      form.style.display = 'none';
      thx.style.display = 'flex';     
      
    }else{
      return false
    }
   
    return true
  })